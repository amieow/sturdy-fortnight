import Typography from "@/components/atoms/Typography";
import LearningReportPointCard from "@/components/molecules/LearningReportPointCard";
import LearningReportExplorerCard from "@/components/molecules/LearningReportExplorerCard";
import {Accordion, AccordionContent, AccordionItem, AccordionTrigger} from "@/components/atoms/Accordion";
import {Progress} from "@/components/atoms/Progress";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/atoms/Avatar";
import SelectCategories from "@/components/atoms/SelectCategories";
import SelectProgress from "@/components/atoms/SelectProgress";
import SelectRecent from "@/components/atoms/SelectRecent";
import LearningReportItem from "@/components/molecules/LearningReportItem";
import {ScrollArea} from "@/components/atoms/ScrollArea";

const LearningReportPage = () => {
	return (
		<>
			{/* SECTION 1 */}
			<section className={"flex flex-col lg:flex-row gap-8 "}>
				{/*POINTS*/}
				<LearningReportPointCard />
				{/* EXPLORER */}
				<LearningReportExplorerCard />
			</section>
			<section className={"mt-8 space-y-6"}>
				<div className={"flex justify-between items-center"}>
					<div className={"space-y-2"}>
						<Typography>Sort By</Typography>
						<SelectRecent />
					</div>
					<div className={"space-y-2 hidden lg:block"}>
						<Typography>Filter By</Typography>
						<div className={"flex gap-2"}>
							<SelectCategories />
							<SelectProgress />
						</div>
					</div>
				</div>
				<Accordion
					type="single"
					collapsible
					className="w-full space-y-6 ">
					<AccordionItem value="item-1">
						<AccordionTrigger
							className={
								"flex flex-col lg:flex-row justify-between items-center rounded-t-xl bg-neutral06 px-6"
							}>
							<div className={"flex flex-row flex-grow items-center gap-6"}>
								<Avatar className={"h-16 w-16"}>
									<AvatarImage
										src="/profil.png"
										alt="@shadcn"
									/>
									<AvatarFallback>CN</AvatarFallback>
								</Avatar>
								<div className={"space-y-2"}>
									<div className={"flex gap-2 items-center"}>
										<Typography
											size={"heading4"}
											as={"h4"}
											color={"primary"}
											className={"text-left"}
										>
											UX Researcher
										</Typography>
										<div
											className={
												"border-[1px] border-neutral01 rounded-md px-4 py-1"
											}>
											Beginner
										</div>
									</div>
									<Typography
										size={"textS"}
										className={"text-left"}>
										10 Courses
									</Typography>
								</div>
							</div>
							<div className={"flex gap-2 items-center w-full lg:basis-1/3 px-4"}>
								<Progress
									value={50}
									className={"border-[1px] border-accent w-full  "}
								/>
								<Typography
									as={"h6"}
									size={"heading4"}>
									50%
								</Typography>
							</div>
						</AccordionTrigger>
						<AccordionContent className={"py-6"}>
							<ScrollArea className={"w-[320px] lg:w-full"}>
								<div className={"flex gap-6 "}>
									<LearningReportItem />
									<LearningReportItem />
									<LearningReportItem />
									<LearningReportItem />
								</div>

							</ScrollArea>
						</AccordionContent>
					</AccordionItem>
					<AccordionItem value="item-2">
						<AccordionTrigger
							className={
								"flex flex-col lg:flex-row justify-between items-center rounded-t-xl bg-neutral06 px-6"
							}>
							<div className={"flex flex-row flex-grow items-center gap-6"}>
								<Avatar className={"h-16 w-16"}>
									<AvatarImage
										src="/profil.png"
										alt="@shadcn"
									/>
									<AvatarFallback>CN</AvatarFallback>
								</Avatar>
								<div className={"space-y-2"}>
									<div className={"flex gap-2 items-center"}>
										<Typography
											size={"heading4"}
											as={"h4"}
											color={"primary"}
										className={"text-left"}>
											UX Researcher
										</Typography>
										<div
											className={
												"border-[1px] border-neutral01 rounded-md px-4 py-1"
											}>
											Beginner
										</div>
									</div>
									<Typography
										size={"textS"}
										className={"text-left"}>
										10 Courses
									</Typography>
								</div>
							</div>
							<div className={"flex gap-2 items-center w-full lg:basis-1/3 px-4"}>
								<Progress
									value={50}
									className={"border-[1px] border-accent w-full  "}
								/>
								<Typography
									as={"h6"}
									size={"heading4"}>
									50%
								</Typography>
							</div>
						</AccordionTrigger>
						<AccordionContent className={"py-6"}>
							<ScrollArea className={"w-[320px] lg:w-full"}>
								<div className={"flex gap-6 "}>
									<LearningReportItem />
									<LearningReportItem />
									<LearningReportItem />
									<LearningReportItem />
								</div>

							</ScrollArea>
						</AccordionContent>
					</AccordionItem>
				</Accordion>
			</section>
		</>
	);
};

export default LearningReportPage;
