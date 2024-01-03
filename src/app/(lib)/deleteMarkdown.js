

const deleteMarkdown = async (id) => {
  try {
    const res = await fetch(
      `/api/markdown/${id}`,
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