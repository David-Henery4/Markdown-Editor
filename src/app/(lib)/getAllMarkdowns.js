
const getAllMarkdowns = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/markdown", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      }
    });
    const data =  res.json()
    // console.log(data)
    return data
  } catch (error) {
    console.log(error)
    return error.message
  }
}

export default getAllMarkdowns