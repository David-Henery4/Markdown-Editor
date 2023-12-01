"use client"
import { useState } from "react"
import { Markdown, Preview } from "./markdown-and-preview-components"

const MarkdownAndPreviewContainer = () => {
  const [isPreviewActive, setIsPreviewActive] = useState(false)
  return (
    <section>

      {/* Could try make these re-usable */}
      {/* Markdown */}
      <Markdown
        isPreviewActive={isPreviewActive}
        setIsPreviewActive={setIsPreviewActive}
      />

      {/* Preview */}
      <Preview
        isPreviewActive={isPreviewActive}
        setIsPreviewActive={setIsPreviewActive}
      />
    </section>
  );
}

export default MarkdownAndPreviewContainer