import Typography from "@/components/atoms/Typography";
import { AboutTeacher } from "@/components/organisms/detail-course/AboutTeacher";
import { OurCurriculums } from "@/components/organisms/detail-course/OurCurriculum";
import RightPriceCard from "@/components/organisms/detail-course/RightPriceCard";
import { TestimonyCourse } from "@/components/organisms/detail-course/TestimonyCourse";
import { DETAIL_COURSE } from "@/content/detailCourse";
import { StringToUrlFormat } from "@/lib/formatter";
import Image from "next/image";
import React from "react";

export const dynamicParams = false;
export async function generateStaticParams() {
	return DETAIL_COURSE.map((item) => ({
		slug: StringToUrlFormat(item.title, "encrypt"),
	}));
}
const AboutCourse = () => {
	const KEY_BENEFITS = [
		"Acquire the essential skills to become a UI/UX designer.",
		"Expand your knowledge in the realms of design and UX.",
		"Enhance your employment prospects in the design and technology sectors.",
	];
	return (
		<section
			className=" flex flex-col gap-5"
			id="about-course">
			<Typography
				size={"heading3"}
				thick="bold"
				as="h3">
				About Course
			</Typography>
			<Typography size={"textL"}>
				Online UI/UX Design courses are an effective way to delve into the world
				of user interface and user experience design. These courses are open to
				anyone, regardless of their design background. The curriculum covers
				design fundamentals, UX concepts, and hands-on projects. By enrolling in
				this course, participants will acquire the skills needed to craft
				efficient and effective digital products.
			</Typography>
			<div>
				<Typography size="textL">
					Here are some key benefits of taking an online UI/UX Design course:
				</Typography>
				<ol>
					{KEY_BENEFITS.map((text, index) => (
						<li
							className="list-decimal ml-4"
							key={index}>
							{text}
						</li>
					))}
				</ol>
			</div>
			<Typography size="textL">
				{`If you're interested in learning UI/UX Design, online courses are a
				fitting choice.`}
			</Typography>
		</section>
	);
};
function Pages({ params }: { params: { slug: string } }) {
	const encrypt = StringToUrlFormat(params.slug, "decrypt");
	const detailCourse =
		DETAIL_COURSE.find(
			(item) => StringToUrlFormat(item.title, "decrypt") == encrypt,
		) || DETAIL_COURSE[1];
	return (
		<main className="flex container gap-12 w-full py-8">
			<section
				id="main"
				className="w-full flex flex-col gap-16">
				<figure className="relative h-[562px]">
					<Image
						alt=""
						fill
						className=" object-cover rounded-xl"
						src={"/detail-course/image.png"}
					/>
				</figure>
				<AboutCourse />
				<OurCurriculums />
				<AboutTeacher />
				<TestimonyCourse />
			</section>
			<div className=" w-fit flex flex-shrink-0 ">
				<RightPriceCard {...detailCourse} />
			</div>
		</main>
	);
}

export default Pages;
