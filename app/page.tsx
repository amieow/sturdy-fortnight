"use client";
import { Button } from "@/components/atoms/Button";
import { COURSE_BIG_CARD_CONTENT } from "@/content/course";
import React from "react";
import TrendingCourseSection from "@/components/organisms/TrendingCourseSection";
import LandingHeroSection from "@/components/organisms/landing/LandingHeroSection";
import LandingOurProgramSection from "@/components/organisms/landing/LandingOurProgramSection";
import LandingTestimonySection from "@/components/organisms/landing/LandingTestimonySection";

export default function Home() {
  return (
    <main className=" bg-neutral01 dark:bg-neutral08">
      <LandingHeroSection />
      <LandingOurProgramSection />
      <TrendingCourseSection
        title={"Trending Course"}
        items={COURSE_BIG_CARD_CONTENT}
        seeMoreButton={
          <Button variant={"tertiary"} className={"font-medium"}>
            See More
          </Button>
        }
      />
      <LandingTestimonySection />
    </main>
  );
}
