"use client";
import {
	COURSE_BIG_CARD_CONTENT,
	COURSE_MINI_CARD_CONTENT,
} from "@/content/course";
import React from "react";
import TrendingCourseSection from "@/components/organisms/TrendingCourseSection";
import LearningPathHeroSection from "@/components/organisms/learning-path/LearningPathHeroSection";
import LearningPathFilterSection from "@/components/organisms/learning-path/LearningPathFilterSection";
import ProductCategorySection from "@/components/organisms/ProductCategorySection";
import { Button } from "@/components/atoms/Button";

export default function LearningPathPage() {
	return (
		<main className="bg-neutral01 dark:bg-neutral08">
			<LearningPathHeroSection />
			<LearningPathFilterSection />
			<ProductCategorySection
				title={"Front-End Developer"}
				items={COURSE_MINI_CARD_CONTENT}
				seeMoreButton={
					<Button
						size={"large"}
						variant={"secondary"}>
						See More
					</Button>
				}
			/>
			<ProductCategorySection
				title={"Back-End Developer"}
				items={COURSE_MINI_CARD_CONTENT}
				seeMoreButton={
					<Button
						size={"large"}
						variant={"secondary"}>
						See More
					</Button>
				}
			/>
			<TrendingCourseSection
				title={"Trending Course"}
				items={COURSE_BIG_CARD_CONTENT}
			/>
		</main>
	);
}
