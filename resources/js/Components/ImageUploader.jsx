import { useState } from "react";

export default function ImageUploader({setImages,images}) {
    const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setSelectedImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div>
      <input type="file" accept="image/*" onChange={handleImageChange} />
      {selectedImage && (
        <img src={selectedImage} alt="Selected" style={{ maxWidth: '400px' }} />
      )}
    </div>
  )
}