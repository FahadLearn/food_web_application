export const Rider_login = async (formData) => {
  try {
    const response = await fetch("http://localhost:3000/Rider/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify(formData),
    });

    const data = await response.json();

    if (!response.ok) {
      return { success: false, error: data.message || "Login failed" };
    }

    return { success: true, message: data.message };
  } catch (error) {
    console.error("User Login Error:", error.message);
    return { error: error.message || "Something went wrong!" };
  }
};
