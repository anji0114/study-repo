"use client";
import React, { useState } from "react";

export const FileContent = () => {
  const [fileInfo, setFileInfo] = useState<{
    name: string;
    type: string;
    preview: string | null ;
  }>({
    name: "",
    type: "",
    preview: null,
  });

  const handleFileChange = (e: any) => {
    const file = e.target.files[0];
    if (!file) return;

    const fileReader = new FileReader();
    fileReader.onload = () => {
      setFileInfo({
        ...fileInfo,
        name: file.name,
        type: file.type,
        preview: file.type.startsWith("image/") ? fileReader.result as string : null,
      });
    };

    if (file.type.startsWith("image/")) {
      fileReader.readAsDataURL(file);
    } else {
      setFileInfo({ ...fileInfo, name: file.name, type: file.type, preview: null });
    }
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />

      <div>
        {fileInfo.type.startsWith("application/pdf") && <p>{fileInfo.name}</p>}
        {fileInfo.type.startsWith("image/") && fileInfo.preview && (
          <img src={fileInfo.preview} alt="Preview" style={{ maxWidth: "100%" }} />
        )}
        {!fileInfo.type.startsWith("application/pdf") &&
          !fileInfo.type.startsWith("image/") &&
          fileInfo.name && <p>{fileInfo.name}</p>}
      </div>
    </div>
  );
};
