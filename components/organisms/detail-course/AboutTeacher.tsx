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
			className=" space-y-5">
			<Typography
				size={"heading3"}
				thick="bold"
				as="h3">
				About Teacher
			</Typography>
			<div className="flex w-full gap-6">
				{TEACHER.map((teacher, index) => (
					<Card
						className="flex py-4 px-6 items-center gap-4 w-full"
						key={index}>
						<CardHeader className="p-0">
							<Image
								width={100}
								height={100}
								src={teacher.teacherImage}
								alt="blur"
							/>
						</CardHeader>
						<CardContent className="p-0">
							<CardTitle>{teacher.name}</CardTitle>
							<CardDescription>{teacher.title}</CardDescription>
						</CardContent>
					</Card>
				))}
			</div>
		</section>
	);
}

export { AboutTeacher };
