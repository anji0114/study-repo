import Image from "next/image";
import React from "react";

const NotFound = () => {
  return (
    <div className="text-center">
      <div className="flex items-center justify-center">
        <Image
          src="/images/common/not-found.webp"
          className="w-[600px] max-w-full h-auto rounded-3xl "
          alt=""
          width={600}
          height={600}
        />
      </div>
    </div>
  );
};

export default NotFound;
