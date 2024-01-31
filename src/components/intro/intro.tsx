import React from "react";

import ProfileImage from "./profile_image";
import Summary from "./summary";
import SummaryLinks from "./summary_links";

export default function Intro() {
  return (
    <section className="mb-28 max-w-[50rem] text-center sm:mb-0">
      <ProfileImage />
      <Summary />
      <SummaryLinks />
    </section>
  );
}
