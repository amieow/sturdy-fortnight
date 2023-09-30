import { RightPriceCardProps } from "@/components/organisms/detail-course/RightPriceCard";
import { COURSE_BIG_CARD_CONTENT } from "./course";

export const DETAIL_COURSE: RightPriceCardProps[] = COURSE_BIG_CARD_CONTENT.map(
	(item) => ({
		...item,
		author: "Albert Einstein Inc.",
		discountPercent: 34,
	}),
);
