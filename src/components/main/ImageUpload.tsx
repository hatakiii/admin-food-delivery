import { X } from "lucide-react";

export const ImageUpload = ({}) => {
  function handleFileChange(e: any) {
    const file = e.target.files[0];
    if (!file) return;

    const filePreview = URL.createObjectURL(file);

    localStorage.setItem("imagePreview", filePreview);
  }

  function handleRemoveImage() {
    localStorage.removeItem("imagePreview");
  }
  // console.log("errormessage", errorMessage);

  return (
    <div className="flex flex-col gap-2 w-full">
      {/* Upload box */}(
      <div className="w-full h-[150px] border border-[#CBD5E1] rounded-lg flex flex-col relative items-center justify-center cursor-pointer hover:border-sky-500 transition">
        <img
          className="w-14 h-14 text-slate-500"
          src="./Add Image Icon@2x.svg"
        ></img>
        <span className="mt-2 text-sm text-slate-500">Add image</span>

        <input
          type="file"
          accept="image/*"
          className="absolute inset-0 opacity-0"
          onChange={handleFileChange}
        />
      </div>
      )
    </div>
  );
};
