import { useState } from "react";

const UploadImage = () => {
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setImage(file);
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setPreview(reader.result);
    };
  };

  const handleUpload = async () => {
    if (!image) {
      alert("Please select an image!");
      return;
    }

    const formData = new FormData();
    formData.append("image", image); // "image" must match backend

    try {
      const response = await fetch("http://localhost:3000/api/upload", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      if (response.ok) {
        alert("Image uploaded successfully!");
        console.log("Image Path:", data.imagePath);
      } else {
        alert("Upload failed: " + data.message);
      }
    } catch (error) {
      console.error("Upload error:", error);
    }
  };

  return (
    <div>
      <input type="file" accept="image/*" onChange={handleFileChange} />
      {preview && <img src={preview} alt="Preview" width="100" />}
      <button onClick={handleUpload}>Upload Image</button>
    </div>
  );
};

export default UploadImage;
