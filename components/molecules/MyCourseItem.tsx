import Typography from "@/components/atoms/Typography";
import { Button } from "@/components/atoms/Button";
import Image from "next/image";
import { IconStar } from "../atoms/icon";

export type MyCourseItemType = {
	title: string;
	progress: number;
	last_chapter: string | null;
	points: string | null;
	isStarted: boolean;
	isFinished: boolean;
	imageUrl: string;
	isBordered?: boolean;
};
export default function MyCourseItem({
	title,
	imageUrl,
	progress,
	last_chapter,
	isBordered,
	isStarted,
	isFinished,
	points,
}: MyCourseItemType) {
	return (
		<div
			className={`relative flex flex-row py-4 gap-4 ${
				isBordered && "border-b-[1px]"
			}`}>
			<div className={"relative w-44 h-32 rounded-xl"}>
				<Image
					fill
					src={imageUrl}
					alt={title}
				/>
			</div>
			<div>
				<Typography
					size={"heading4"}
					as={"h4"}>
					{title}
				</Typography>
				<div className={"space-y4"}>
					<div className={"flex flex-row items-center"}>
						<Typography
							size={"textS"}
							color={"muted"}>
							{isFinished ? "Finished" : `${progress}% Complete`}
						</Typography>
						{isStarted && (
							<Typography
								className={"ml-2 text-accent flex gap-2 w-fit items-center"}
								color={"accent"}
								size={"textS"}>
								<IconStar className={"w-3 h-3"} />
								{points} Points
							</Typography>
						)}
					</div>
					{!isFinished && (
						<Typography
							color={"muted"}
							size={"textS"}>
							Last chapter{" "}
							<strong> {isStarted ? last_chapter : "Not Started Yet"}</strong>
						</Typography>
					)}
				</div>
			</div>
			<div className={"absolute right-4 bottom-4"}>
				{!isStarted && <Button size={"medium"}>Learn Now</Button>}
				{isStarted && !isFinished && (
					<Button
						variant={"secondary"}
						size={"medium"}>
						Continue
					</Button>
				)}
				{isFinished && (
					<div className={"flex gap-4"}>
						<Button
							variant={"tertiary"}
							size={"medium"}>
							Review
						</Button>
						<Button
							variant={"primary"}
							size={"medium"}>
							See Certificate
						</Button>
					</div>
				)}
			</div>
		</div>
	);
}
