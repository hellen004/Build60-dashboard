export type UploadedMedia = {
  url: string;
  type: "IMAGE" | "VIDEO";
};

export const uploadToCloudinary = async (
  files: File[]
): Promise<UploadedMedia[]> => {
  const cloudName = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;
  const preset = import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET;

  const uploads = files.map(async (file) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", preset);

    const isVideo = file.type.startsWith("video");

    const endpoint = `https://api.cloudinary.com/v1_1/${cloudName}/${
      isVideo ? "video" : "image"
    }/upload`;

    const res = await fetch(endpoint, {
      method: "POST",
      body: formData,
    });

    if (!res.ok) {
      throw new Error("Cloudinary upload failed");
    }

    const data = await res.json();

    return {
      url: data.secure_url,
      type: isVideo ? "VIDEO" : "IMAGE",
    } as UploadedMedia;
  });

  return Promise.all(uploads);
};
