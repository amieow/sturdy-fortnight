import {
	Card,
	CardContent,
	CardHeader,
	CardTitle,
} from "@/components/atoms/Card";
import Typography from "@/components/atoms/Typography";
import { IconStar } from "@/components/atoms/icon";
import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

const TESTIMONY_COURSES = [
	{
		name: "Donny Jon",
		rating: 4,
		image: "/testimony-course/testimony1.png",
		description:
			"I couldn't be happier with this UI/UX course! The instructor's expertise and hands-on projects helped me gain practical design skills that I use daily in my job. Highly recommended!",
	},
	{
		name: "Examplar Don",
		rating: 4,
		image: "/testimony-course/testimony2.png",
		description:
			"As someone with no prior design experience, this course was a game-changer. The concepts were explained clearly, and I appreciated the practical exercises. I've already started applying what I learned to my personal projects",
	},
	{
		name: "Alexis MacBride",
		rating: 0,
		image: "/testimony-course/testimony3.png",
		description:
			"John, our instructor, is a design wizard! His insights and real-world examples made the course engaging and informative. I now feel confident tackling design challenges in my professional work.",
	},
	{
		name: "Jill Jackil",
		rating: 0,
		image: "/testimony-course/testimony4.png",
		description:
			"This course was worth every penny. The hands-on approach, coupled with Sarah's industry insights, gave me the skills to land a UI design job. I can't thank the team enough for this opportunity!",
	},
	{
		name: "Nora Jones",
		rating: 0,
		image: "/testimony-course/testimony5.png",
		description:
			"I've taken several online courses, but this UI/UX course stands out. Alex's expertise and the variety of design projects made learning fun and practical. I've already recommended it to my colleagues!",
	},
];

function TestimonyCourse() {
	return (
		<section
			className=" space-y-5 py-8"
			id="testimoni-course">
			<Typography
				size={"heading3"}
				thick="bold"
				as="h3">
				Testimoni Course
			</Typography>
			<div className="gap-5 py-8 flex-col inline-flex overflow-x-scroll snap-mandatory snap-x">
				{TESTIMONY_COURSES.map((course, index) => (
					<Card
						className={cn(
							"px-8 py-5 flex gap-[42px] max-lg:flex-col snap-center",
							{
								"max-lg:hidden": index >= 2,
							},
						)}
						key={index}>
						<CardHeader className="flex-row flex-shrink-0 gap-6 p-0">
							<div className=" relative w-20 h-20">
								<Image
									src={course.image}
									alt="blur"
									fill
								/>
							</div>
							<div className=" space-y-2">
								<CardTitle className=" text-base">{course.name}</CardTitle>
								<div className="flex gap-0.5">
									{Array.from(
										{ length: Math.min(course.rating, 5) },
										(_, index) => (
											<IconStar
												key={index}
												width={24}
												height={24}
												className="text-primary"
											/>
										),
									)}
									{Array.from(
										{ length: Math.max(5 - course.rating, 0) },
										(_, index) => (
											<IconStar
												key={index}
												width={24}
												height={24}
												className=" fill-transparent"
											/>
										),
									)}
								</div>
							</div>
						</CardHeader>
						<Typography
							color={"muted"}
							thick={"light"}
							size={"textL"}>
							{course.description}
						</Typography>
					</Card>
				))}
			</div>
		</section>
	);
}

export { TestimonyCourse };
