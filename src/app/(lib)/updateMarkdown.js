const updateMarkdown = async (id, updatedData) => {
  try {
    console.log("update markdown call - id: ",id)
    console.log("update markdown call - updatedData: ", updatedData)
    const res = await fetch(`http://localhost:3000/api/markdown/${id}`, {
      method: "PUT",
      body: JSON.stringify({
        markdownData: { ...updatedData },
      }),
      next: { revalidate: 3600 }
    });
    // 
    return await res.json()
    //
  } catch (error) {
    console.error(error)
  }
};

export default updateMarkdown;
