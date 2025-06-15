import fs from "fs";
import path from "path";
import { remark } from "remark";
import html from "remark-html";
import { failOptions, successOptions } from "./headers";

export async function GET() {
  const filePath = path.join(process.cwd(), `readme.md`);

  try {
    const markdownContent: string = fs.readFileSync(filePath, "utf8");
    const processedContent: any = await remark()
      .use(html)
      .process(markdownContent);
    const contentHtml: string = `
    <!doctype html>
    <html lang="en">
      <head>
        <title>8-magic-api</title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="/style.css">
      </head>
      <body>${processedContent}</body>
    </html>
    `.replace(/[^<]+/g, (str) => str.replace(/\s+/, " "));
    return new Response(
      contentHtml,
      successOptions("Welcome", 200, "text/html")
    );
  } catch (error: any) {
    return new Response(
      "Error: " + (error.message || "Unknown error"),
      failOptions(500, "Error", "text/plain")
    );
  }
}
