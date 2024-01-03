
const getAllMarkdowns = async () => {
  try {
    const res = await fetch(
      "/api/markdown",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data =  res.json()
    return data
  } catch (error) {
    console.log(error)
    return error.message
  }
}

export default getAllMarkdowns