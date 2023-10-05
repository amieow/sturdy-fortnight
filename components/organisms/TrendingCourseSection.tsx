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
		<section className={"py-12 space-y-8"}>
			<div className={"flex justify-between items-center px-12 container"}>
				<Typography size={"heading1"} thick={"bold"}>
					{title}
				</Typography>
				{seeMoreButton}
			</div>

			<div
				className={
					"gap-6  overflow-x-auto px-32 snap-x whitespace-nowrap space-x-8"
				}
			>
				{items.map((props, index) => (
					<div className={"snap-center inline-block"} key={index}>
						<CourseBigCard {...props} />
					</div>
				))}
			</div>
		</section>
	);
};

export default TrendingCourseSection;
