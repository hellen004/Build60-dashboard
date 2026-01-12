export type UploadedMedia = {
  url: string;
  type: "IMAGE" | "VIDEO";
};

export const uploadToCloudinary = async (
  files: File[]
): Promise<UploadedMedia[]> => {
  const cloudName = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;
  const preset = import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET;

  if (!cloudName || !preset) {
    throw new Error("Missing Cloudinary environment variables");
  }

  const uploads = files.map(async (file) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", preset);

    const res = await fetch(
      `https://api.cloudinary.com/v1_1/${cloudName}/auto/upload`,
      {
        method: "POST",
        body: formData,
      }
    );

    const data = await res.json();

    if (!res.ok) {
      console.error("Cloudinary response:", data);
      throw new Error(data.error?.message || "Cloudinary upload failed");
    }

    return {
      url: data.secure_url,
      type: file.type.startsWith("video") ? "VIDEO" : "IMAGE",
    };
  });

  return Promise.all(uploads);
};
