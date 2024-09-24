"use client";

import React, { ComponentProps, useState } from "react";

function ImageUploaderPage() {
  const [imgUrls, setImgUrls] = useState<string[]>([]);

  const handleChangeImage: ComponentProps<"input">["onChange"] = async (e) => {
    const files = e.target.files;
    if (!files) return;

    const formData = new FormData();
    formData.append("img", files[0]);

    const response = await fetch("http://localhost:3000/api/images", {
      method: "POST",
      body: formData,
    });
    const imgUrl = await response.json();

    setImgUrls((prev) => [imgUrl, ...prev]);
  };

  return (
    <div>
      <h1 className="text-3xl">이미지 업로더</h1>

      <input onChange={handleChangeImage} type="file" />

      <hr />

      {imgUrls.map((imgUrl) => (
        <img key={imgUrl} src={imgUrl} />
      ))}
    </div>
  );
}

export default ImageUploaderPage;
