"use client";
import React from "react";
import SectionOurStoryAboutUs from "@/components/organisms/about-us/SectionOurStoryAboutUs";
import SectionHeroAboutUs from "@/components/organisms/about-us/SectionHeroAboutUs";
import SectionVisionAboutUs from "@/components/organisms/about-us/SectionVisionAboutUs";

export default function AboutUsPage() {
	return (
		<main className="py-6 lg:py-24 bg-neutral01 dark:bg-neutral08 ">
			<SectionHeroAboutUs />
			<SectionOurStoryAboutUs />
			<SectionVisionAboutUs />
		</main>
	);
}
