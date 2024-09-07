import React from "react";
import Image from "next/image";

function ImageOverlay() {
  return (
    <div className="relative right-0 translate-x-0 mt-2 w-auto h-10 hidden md:block">
      <Image
        className="size-14 border-[4px] border-white rounded-full relative z-10"
        width={56}
        height={56}
        src={"/auth/pfp1.png"}
        alt="profileImage"
      />
      <Image
        width={56}
        height={56}
        className="size-14 border-[4px] border-white rounded-full relative z-20 bottom-[54px] left-[50px]"
        src={"/auth/pfp2.png"}
        alt="profileImage"
      />
      <Image
        width={56}
        height={56}
        className="size-14 border-[4px] border-white rounded-full relative z-30 bottom-[6.85rem] left-[100px]"
        src={"/auth/pfp3.png"}
        alt="profileImage"
      />
    </div>
  );
}

export default ImageOverlay;
