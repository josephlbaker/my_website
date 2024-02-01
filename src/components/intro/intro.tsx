"use client";

import React from "react";

import ProfileImage from "./profile_image";
import Summary from "./summary";
import SummaryLinks from "./summary_links";
import { useSectionInView } from "@/src/lib/hooks";

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);

  return (
    <section
      ref={ref}
      className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]"
      id="home"
    >
      <ProfileImage />
      <Summary />
      <SummaryLinks />
    </section>
  );
}
