"use client";
import React from "react";
import Mobile from "@/components/Team/mobile";
import Desktop from "@/components/Team/desktop";
import MeetOurInterns from "@/components/Team/MeetOurInterns";
import OurGlobalLeaders from "@/components/Team/OurGlobalLeaders";
import Image from "next/image";
import { useRouter } from "next/navigation";  // <-- Potential issue here, it should be `next/router`

function Teams() {
  const router = useRouter();
  return (
    <div>
      <main className="px-10 py-10">
        <OurGlobalLeaders />
        {/* <section className="sm:hidden min-h-screen w-full">
          <Mobile />
        </section> */}

        {/* <Desktop /> */}

        {/* <MeetOurInterns /> */}
      </main>
    </div>
  );
}

export default Teams;
