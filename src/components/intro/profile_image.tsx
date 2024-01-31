"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import headshot from "@/public/headshot_white_upscaled_copy.png";

export default function ProfileImage() {
  return (
    <div className="flex items-center justify-center">
      <div className="relative">
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            type: "tween",
            duration: 0.2,
          }}
        >
          <Image
            className="h-24 w-24 rounded-full object-cover border-[0.35rem] border-[#fefefe] shadow-xl"
            src={headshot}
            alt="Joseph Baker portrait"
            width="192"
            height="192"
            quality="95"
            priority={true}
          />
        </motion.div>
        <motion.span
          className="absolute bottom-0 right-0 text-4xl"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 125,
            delay: 0.1,
            duration: 0.7,
          }}
        >
          👋
        </motion.span>
      </div>
    </div>
  );
}
