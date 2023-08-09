import { useState } from "react";
import { forwardRef, useEffect, useRef } from 'react';

export default function ImageUploader({setImages,images, className, label}) {
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
    <h1>{label}</h1>
      <input 
        type="file" 
        className="" accept="image/*" 
        onChange={handleImageChange} 
        
    />
      {selectedImage && (
        <img src={selectedImage} alt="Selected" className={className} />
        
      )}
    </div>
  )
}