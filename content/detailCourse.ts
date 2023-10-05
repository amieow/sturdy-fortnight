import { RightPriceCardProps } from "@/components/organisms/detail-course/RightPriceCard";
import { COURSE_BIG_CARD_CONTENT } from "./course";
import { CURRICULUMS } from "./curriculums";

export const DETAIL_COURSE: RightPriceCardProps[] = COURSE_BIG_CARD_CONTENT.map(
	(item) => ({
		...item,
		author: "Albert Einstein Inc.",
		discountPercent: 34,
	}),
);

export interface DetailCourseDibeliType {
	chapter: string;
	pelajaran: {
		title: "Quiz" | number;
		duration: number;
	}[];
}

export const DETAIL_COURSE_DIBELI: DetailCourseDibeliType[] = CURRICULUMS.map(
	(item) => ({
		...item,
		pelajaran: item.pelajaran.map((value) => ({
			title: value,
			duration: 480000,
		})),
	}),
);
