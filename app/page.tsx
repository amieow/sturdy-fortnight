"use client";
import { Button } from "@/components/atoms/Button";
import { COURSE_BIG_CARD_CONTENT } from "@/content/course";
import React from "react";
import CourseCategorySection from "@/components/organisms/CourseCategorySection";
import LandingHeroSection from "@/components/organisms/landing/LandingHeroSection";
import LandingOurProgramSection from "@/components/organisms/landing/LandingOurProgramSection";

export default function Home() {
  return (
    <main className="py-24 bg-neutral01 dark:bg-neutral08">
      <LandingHeroSection />
      <LandingOurProgramSection />
      <CourseCategorySection
        title={"Trending Course"}
        items={COURSE_BIG_CARD_CONTENT}
        seeMoreButton={
          <Button variant={"tertiary"} className={"font-medium"}>
            See More
          </Button>
        }
      />
    </main>
  );
}
