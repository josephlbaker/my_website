"use client";

import React from 'react'
import { motion } from 'framer-motion';
import ProfileImage from './profile_image';
import Summary from './summary';

export default function Intro() {
    return (
        <section className="mb-28 max-w-[50rem] text-center sm:mb-0">
            <ProfileImage />
            <Summary />
        </section>
    );
}
