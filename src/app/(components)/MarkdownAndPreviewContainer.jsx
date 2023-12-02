"use client"
import { useState } from "react"
import { Markdown, Preview } from "./markdown-and-preview-components"
import tempData from "../../../data.json";

const MarkdownAndPreviewContainer = () => {
  const [isPreviewActive, setIsPreviewActive] = useState(false)
  const [currentMarkdownContent, setCurrentMarkdownContent] = useState(
    tempData[1].content
  );
  return (
    <section className="grid grid-cols-markdownPreviewContainer">
      {/* Could try make these re-usable */}
      {/* Markdown */}
      <Markdown
        isPreviewActive={isPreviewActive}
        setIsPreviewActive={setIsPreviewActive}
        currentMarkdownContent={currentMarkdownContent}
        setCurrentMarkdownContent={setCurrentMarkdownContent}
      />

      {/* Preview */}
      <Preview
        isPreviewActive={isPreviewActive}
        setIsPreviewActive={setIsPreviewActive}
        currentMarkdownContent={currentMarkdownContent}
      />
    </section>
  );
}

export default MarkdownAndPreviewContainer