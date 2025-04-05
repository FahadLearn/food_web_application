export const universalLogin = async (formData) => {
  try {
    const response = await fetch("http://localhost:3000/API/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include", // Add this to allow cookies to be stored
      body: JSON.stringify(formData),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Login Error:", error.message);
    return { error: error.message || "Something went wrong!" };
  }
};
