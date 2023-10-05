type CURRICULUMSTYPE = {
	chapter: string;
	pelajaran: ("Quiz" | number)[];
};
export const CURRICULUMS: CURRICULUMSTYPE[] = [
	{
		chapter: "Chapter 1: Getting Know About User Experience",
		pelajaran: [1, 2, 3, "Quiz", 4, 5, "Quiz"],
	},
	{
		chapter: "Chapter 2: User Experience Method & Framework",
		pelajaran: [1, 2, 3, "Quiz", 4, 5, "Quiz"],
	},
	{
		chapter: "Chapter 3: UX Process & Research",
		pelajaran: [1, 2, 3, "Quiz", 4, 5, "Quiz"],
	},
	{
		chapter: "Chapter 4: How to Validate User Experience ",
		pelajaran: [1, 2, 3, "Quiz", 4, 5, "Quiz"],
	},
	{
		chapter: "Chapter 5: UX Usability & Audit",
		pelajaran: [1, 2, 3, "Quiz", 4, 5, "Quiz"],
	},
	{
		chapter: "Chapter 6: How to create portfolio",
		pelajaran: [1, 2, 3, "Quiz", 4, 5, "Quiz"],
	},
	{
		chapter: "Chapter 7: Final Assesment",
		pelajaran: [1, 2, 3, "Quiz", 4, 5, "Quiz"],
	},
];
