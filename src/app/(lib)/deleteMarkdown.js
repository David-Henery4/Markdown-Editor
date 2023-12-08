

const deleteMarkdown = async (id) => {
  try {
    const res = await fetch(`http://localhost:3000/api/markdown/${id}`, {
      method: "DELETE",
    });
    //
    return await res.json()
    //
  } catch (error) {
    console.error(error)
  }
}

export default deleteMarkdown