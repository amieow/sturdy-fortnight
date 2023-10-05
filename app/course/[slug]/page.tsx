import Typography from "@/components/atoms/Typography";
import { AboutCourse } from "@/components/organisms/detail-course/AboutCourse";
import { AboutTeacher } from "@/components/organisms/detail-course/AboutTeacher";
import { NavigationLearning } from "@/components/organisms/detail-course/NavigationLearning";
import { OurCurriculums } from "@/components/organisms/detail-course/OurCurriculum";
import RightPriceCard from "@/components/organisms/detail-course/RightPriceCard";
import { TestimonyCourse } from "@/components/organisms/detail-course/TestimonyCourse";
import { DETAIL_COURSE } from "@/content/detailCourse";
import { StringToUrlFormat } from "@/lib/formatter";
import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

export const dynamicParams = false;
export async function generateStaticParams() {
	return DETAIL_COURSE.map((item) => ({
		slug: StringToUrlFormat(item.title, "encrypt"),
	}));
}
function Pages({ params }: { params: { slug: string } }) {
	const encrypt = StringToUrlFormat(params.slug, "decrypt");
	const isPurchased = false;
	const detailCourse =
		DETAIL_COURSE.find(
			(item) => StringToUrlFormat(item.title, "decrypt") == encrypt,
		) || DETAIL_COURSE[0];
	return (
		<main className="flex container gap-12 w-full py-8">
			<section
				id="main"
				className="w-full flex flex-col">
				<figure className="relative h-36 sm:h-60 md:h-[366px] lg:h-[562px] mb-8">
					<Image
						alt=""
						fill
						className=" object-cover rounded-xl"
						src={"/detail-course/image.png"}
					/>
				</figure>
				{isPurchased && <NavigationLearning />}
				<div className={cn({ "space-y-3 bg-neutral06 px-6": isPurchased })}>
					<div className=" w-full lg:hidden">
						<RightPriceCard {...detailCourse} />
					</div>
					<AboutCourse />
					<OurCurriculums />
					<AboutTeacher />
					{!isPurchased && <TestimonyCourse />}
				</div>
			</section>
			<div className=" w-fit max-lg:hidden flex flex-shrink-0 ">
				<RightPriceCard {...detailCourse} />
			</div>
		</main>
	);
}

export default Pages;
