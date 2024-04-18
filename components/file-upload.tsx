"use client";

import toast from "react-hot-toast";
import { UploadDropzone } from "@/lib/uploadthing";
import { ourFileRouter } from "@/app/api/uploadthing/core";

interface FileUploadProps {
  onChange: (url?: string) => void;
  endpoint: keyof typeof ourFileRouter;
}

export const FileUpload = ({ onChange, endpoint }: FileUploadProps) => {
  return (
    <UploadDropzone
      endpoint={endpoint}
      onClientUploadComplete={(res) => {
        console.log("inside file upload, upload complete..., res:", res);
        
        onChange(res?.[0].url);
      }}
      onUploadError={(error) => {
        console.log("inside onuploaderror, error:", error);
        
        toast.error(`${error?.message}`)
      }}
    />
  );
};
