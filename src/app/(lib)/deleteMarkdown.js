

const deleteMarkdown = async (id) => {
  try {
    const res = await fetch(
      `https://markdown-editor-md.vercel.app/api/markdown/${id}`,
      {
        method: "DELETE",
      }
    );
    //
    return await res.json()
    //
  } catch (error) {
    console.error(error)
  }
}

export default deleteMarkdown