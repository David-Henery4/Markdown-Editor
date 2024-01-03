const updateMarkdown = async (id, updatedData) => {
  try {
    const res = await fetch(
      `/api/markdown/${id}`,
      {
        method: "PUT",
        body: JSON.stringify({
          markdownData: { ...updatedData },
        }),
        next: { revalidate: 3600 },
      }
    );
    // 
    return await res.json()
    //
  } catch (error) {
    console.error(error)
  }
};

export default updateMarkdown;
