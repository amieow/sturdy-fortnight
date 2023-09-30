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
		<section className={" space-y-8"}>
			<div className={"flex justify-between items-center "}>
				<Typography
					size={"heading1"}
					thick={"bold"}>
					{title}
				</Typography>
				{seeMoreButton}
			</div>

			<div className={"flex gap-6  overflow-x-auto snap-x"}>
				{items.map((props, index) => (
					<div
						className={"snap-center"}
						key={index}>
						<CourseBigCard {...props} />
					</div>
				))}
			</div>
		</section>
	);
};

export default TrendingCourseSection;
