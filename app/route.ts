import { NextApiResponse } from "next";
import fs from "fs";
import path from "path";
import { remark } from "remark";
import html from "remark-html";

export async function GET(res: NextApiResponse) {
  const filePath = path.join(process.cwd(), `readme.md`);

  try {
    const markdownContent = fs.readFileSync(filePath, "utf8");
    const processedContent = await remark().use(html).process(markdownContent);
    const contentHtml = `
    <!doctype html>
    <html lang="en">
      <head>
        <title>8-magic-api</title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <style>
          body {
            font-family: system-ui;
            background-color: #f0f0f0;
            font-size: 16px;
          }
          a:link, a:visited {
            color: darkblue;
            text-decoration: none;
          }
          a:hover, a:active, a:focus {
            text-decoration: underline 1px;
          }
          code {
            border: 1px solid gray;
            padding: 2px 4px;
          }
        </style>
      </head>
      <body>
        ${processedContent}
      </body>
    </html>
    `;

    return new Response(contentHtml, {
      headers: {
        "Content-Type": "text/html; charset=UTF-8",
      },
    });
  } catch (error: any) {
    return new Response("Error: " + (error.message || "Unknown error"), {
      headers: {
        "Content-Type": "text/plain; charset=UTF-8",
      },
    });
  }
}
