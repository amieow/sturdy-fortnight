"use client";
import { millisecondsToHoursMinutesSeconds } from "@/lib/formatter";
import { RightPriceCardProps } from "./RightPriceCard";

import { IconStar, Iconclock } from "@/components/atoms/icon";
import Typography from "@/components/atoms/Typography";

export const HeaderDetailCourse = (
	props: Pick<
		RightPriceCardProps,
		"rating" | "reviewCount" | "duration" | "author" | "title"
	>,
) => {
	const time = millisecondsToHoursMinutesSeconds(props.duration);
	return (
		<div className="flex flex-col gap-2">
			<Typography
				thick="bold"
				size="heading2">
				{props.title}
			</Typography>
			<div className="flex justify-between">
				<div className="flex gap-2 items-center">
					<IconStar
						width={25}
						height={25}
						className=" text-Annotations "
					/>
					<Typography
						size={"textL"}
						className="text-neutral03"
						color="muted">
						{`${String(props.rating).slice(0, 3)} (${props.reviewCount})`}
					</Typography>
				</div>
				<div className="flex gap-2 items-center">
					<Iconclock
						width={25}
						height={25}
						className="text-neutral03"
					/>
					<Typography
						size={"textL"}
						className="text-neutral03"
						color="muted">{`${time.hours}h, ${time.minutes}m`}</Typography>
				</div>
			</div>
			<Typography size="textXl">
				by{" "}
				<Typography
					as="span"
					size="textXl"
					thick="bold">
					{props.author}
				</Typography>
			</Typography>
		</div>
	);
};
