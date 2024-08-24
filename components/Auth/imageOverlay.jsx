import React from "react";
import Image from "next/image";

function imageOverlay() {
  return (
    <div className="relative right-[120px] translate-x-[-50%] mt-2 left-9 w-auto h-10 hidden md:block">
      <Image
        className=" size-14 border-[4px] border-white rounded-full relative z-10 "
        width={56}
        height={56}
        src={"/auth/pfp1.png"}
        alt="profileImage"
      />
      <Image
        width={56}
        height={56}
        className=" size-14 border-[4px] border-white rounded-full relative z-20 bottom-[54px] left-9 "
        src={"/auth/pfp2.png"}
        alt="profileImage"
      />
      <Image
        width={56}
        height={56}
        className=" size-14 border-[4px] border-white rounded-full relative z-30 bottom-[6.85rem] left-[70px] "
        src={"/auth/pfp3.png"}
        alt="profileImage"
      />
    </div>
  );
}

export default imageOverlay;
