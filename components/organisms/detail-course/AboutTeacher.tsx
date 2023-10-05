import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/atoms/Card";
import Typography from "@/components/atoms/Typography";
import Image from "next/image";
import React from "react";
const TEACHER = [
	{
		teacherImage: "/teacher/teacher-1.png",
		name: "Sarah Baratheon",
		title: "Lead Designer at Meowland",
	},
	{
		teacherImage: "/teacher/teacher-2.png",
		name: "Alex Janex",
		title: "UX Researcher at Dunner",
	},
];
function AboutTeacher() {
	return (
		<section
			id="about-teacher"
			className=" space-y-5 py-8">
			<Typography
				size={"heading3"}
				thick="bold"
				as="h3">
				About Teacher
			</Typography>
			<div className="flex w-full gap-6 max-md:overflow-scroll snap-x snap-mandatory">
				{TEACHER.map((teacher, index) => (
					<Card
						className="flex py-4 px-6 max-md:flex-shrink-0 snap-center items-center gap-4 w-fit md:w-full"
						key={index}>
						<CardHeader className="p-0 relative max-md:flex-shrink-0 w-20 h-20 md:w-[100px] md:h-[100px]">
							<Image
								fill
								className=" "
								src={teacher.teacherImage}
								alt="blur"
							/>
						</CardHeader>

						<CardContent className="p-0 flex flex-col max-md:flex-shrink-0">
							<CardTitle className="flex flex-shrink-0">
								{teacher.name}
							</CardTitle>
							<CardDescription className="flex max-md:flex-shrink-0">
								{teacher.title}
							</CardDescription>
						</CardContent>
					</Card>
				))}
			</div>
		</section>
	);
}

export { AboutTeacher };
