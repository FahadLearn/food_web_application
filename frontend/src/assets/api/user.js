export const Register = async (formData) => {
  try {
    const response = await fetch("http://localhost:3000/api/Register", {
      // ✅ Added `await`
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const data = await response.json();
    console.log(data);
    if (!response.ok) {
      return { success: false, error: data.message || "Registration failed" }; // ✅ Handle API errors
    }

    return { success: true, message: data.message }; // ✅ Return data if needed
  } catch (error) {
    console.error("Error in registration:", error.message); // ✅ Better error logging
    throw error; // ✅ Rethrow for handling in UI
  }
};

export const User_Login = async (formData) => {
  try {
    const response = await fetch("http://localhost:3000/api/Login", {
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

export const Admin_login = async (formData) => {
  try {
    const response = await fetch("http://localhost:3000/api/Admin_dashboard", {
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
    console.error("Admin Login Error:", error.message);
    return { error: error.message || "Something went wrong!" };
  }
};
