import { createUploadthing, type FileRouter } from "uploadthing/next";
import { auth } from "@clerk/nextjs";

const f = createUploadthing();

const handleAuth = () => {
  console.log("hit handle auth");

  const { userId } = auth();
  if (!userId) {
    throw new Error("Unauthorized");
  }
  console.log('user id', userId);
  
  return { userId };
};

// FileRouter for your app, can contain multiple FileRoutes
export const ourFileRouter = {
  courseImage: f({
    image: {
      maxFileSize: "4MB",
      maxFileCount: 1,
    },
  })
    .middleware(() => handleAuth())
    .onUploadComplete((res) => {
        console.log('upload complete', res);
        
    }),
  courseAttachment: f(["text", "pdf", "image", "video", "audio"])
    .middleware(() => handleAuth())
    .onUploadComplete(() => {}),
  chapterVideo: f({
    video: {
      maxFileCount: 1,
      maxFileSize: "512GB",
    },
  })
    .middleware(() => handleAuth())
    .onUploadComplete(() => {}),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;
