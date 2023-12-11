"use client"
import { useEffect, useState } from "react"
import { Markdown, Preview } from "./markdown-and-preview-components"
import useGlobalContext from "../context/useGlobalContext";

const MarkdownAndPreviewContainer = ({ allCurrentMarkdowns }) => {
  const { activeMd, setActiveMdData } = useGlobalContext();
  const [isPreviewActive, setIsPreviewActive] = useState(false);
  //
  useEffect(() => {
    setActiveMdData(allCurrentMarkdowns[activeMd])
  }, [activeMd])
  //
  return (
    <section className="grid grid-cols-markdownPreviewContainer">
      {/* Could try make these re-usable */}
      {/* Markdown */}
      <Markdown
        isPreviewActive={isPreviewActive}
        setIsPreviewActive={setIsPreviewActive}
        // currentMarkdownContent={currentMarkdownContent}
        // setCurrentMarkdownContent={setCurrentMarkdownContent}
      />

      {/* Preview */}
      <Preview
        isPreviewActive={isPreviewActive}
        setIsPreviewActive={setIsPreviewActive}
        // currentMarkdownContent={currentMarkdownContent}
      />
    </section>
  );
};

export default MarkdownAndPreviewContainer