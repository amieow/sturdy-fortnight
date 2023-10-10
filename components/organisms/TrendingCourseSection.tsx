import CourseBigCard, {
	CourseBigCardType,
} from "@/components/molecules/CourseBigCard";
import React, { ReactNode } from "react";
import Typography from "@/components/atoms/Typography";

export type TrendingCourseSectionType = {
	title: string;
	items: CourseBigCardType[];
	seeMoreButton?: ReactNode;
};
const TrendingCourseSection = ({
	title,
	items,
	seeMoreButton,
}: TrendingCourseSectionType) => {
	return (
		<section className={"py-12 max-xl:pl-4 space-y-8"}>
			<div className={"flex justify-between container items-center"}>
				<Typography
					size={"heading1"}
					className={"max-sm:text-[28px]"}
					thick={"bold"}>
					{title}
				</Typography>
				{seeMoreButton}
			</div>
			<div
				className={"gap-6 px-6 lg:px-24 overflow-x-auto snap-x whitespace-nowrap space-x-8"}>
				{items.map((props, index) => (
					<div
						className={"snap-center inline-block"}
						key={index}>
						<CourseBigCard {...props} />
					</div>
				))}
			</div>
		</section>
	);
};

export default TrendingCourseSection;
