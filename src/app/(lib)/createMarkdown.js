
const createMarkdown = async (newMarkdowndata) => {
  try {
    const res = await fetch(
      "https://markdown-editor-md.vercel.app/api/markdown",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          markdownData: { ...newMarkdowndata },
        }),
      }
    );
    //
    return await res.json()
    //
  } catch (error) {
    console.error(error)
  }
};

export default createMarkdown;
