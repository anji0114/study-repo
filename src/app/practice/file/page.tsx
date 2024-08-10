import { FileContent } from "@/features/Practice/File/components/Content";
import { Dropzone } from "@/features/Practice/File/components/DropZone";

const page = () => {
  return (
    <div>
      <FileContent />
      <Dropzone />
    </div>
  );
};

export default page;
