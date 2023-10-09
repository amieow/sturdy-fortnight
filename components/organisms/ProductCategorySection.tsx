import React, { ReactNode } from "react";
import Typography from "@/components/atoms/Typography";
import CourseMiniCard, {
	CourseMiniCardType,
} from "@/components/molecules/CourseMiniCard";

export type ProductCategorySectionType = {
	title: string;
	items: CourseMiniCardType[];
	seeMoreButton?: ReactNode;
};
const ProductCategorySection = ({
	title,
	items,
	seeMoreButton,
}: ProductCategorySectionType) => {
	return (
		<section className={"py-6 space-y-8 lg:container max-md:pl-4"}>
			<div className={"flex justify-between items-center "}>
				<Typography
					size={"heading1"}
					className=" max-sm:text-2xl"
					thick={"bold"}>
					{title}
				</Typography>
				<div className=" max-sm:hidden">{seeMoreButton}</div>
			</div>

			<div
				className={
					" flex lg:flex-wrap justify-between overflow-x-auto snap-x gap-8"
				}>
				{items.slice(0, 4).map((props, index) => (
					<CourseMiniCard
						{...props}
						key={index}
					/>
				))}
			</div>
		</section>
	);
};

export default ProductCategorySection;
