import { cn } from "@/lib/utils";
import React from "react";

const NAVIGATION_LEARNING_MENU = [
	{
		title: "Overview",
		link: "",
	},
	{
		title: "Q&A",
		link: "",
	},
	{
		title: "Notes",
		link: "",
	},
	{
		title: "Announcements",
		link: "",
	},
	{
		title: "Reviews",
		link: "",
	},
];

function NavigationLearning({ selected }: { selected?: string }) {
	const Selected = selected || NAVIGATION_LEARNING_MENU[0].title;
	return (
		<nav>
			<ul className="flex border-y border-[#EEEEEE]">
				{NAVIGATION_LEARNING_MENU.map((navigator, index) => (
					<li
						className={cn(" text-base font-inter p-3", {
							"text-primary font-semibold": Selected == navigator.title,
						})}
						key={index}>
						{navigator.title}
					</li>
				))}
			</ul>
		</nav>
	);
}

export { NavigationLearning };
