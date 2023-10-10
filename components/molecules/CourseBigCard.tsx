import { Card, CardContent } from "@/components/atoms/Card";
import Typography from "@/components/atoms/Typography";
import {
	StringToUrlFormat,
	formatRupiah,
	millisecondsToHoursMinutesSeconds,
} from "@/lib/formatter";
import Image from "next/image";
import { Button } from "@/components/atoms/Button";
import { IconStar, Iconclock } from "../atoms/icon";
import Link from "next/link";
export type CourseBigCardType = {
	imageUrl: string;
	title: string;
	price: number;
	rating: number;
	reviewCount: number;
	duration: number;
};

const CourseBigCard = ({
	imageUrl,
	title,
	rating,
	reviewCount,
	price,
	duration,
}: CourseBigCardType) => {
	return (
		<Card className={"w-fit lg:w-[390px] min-w-[300px]"}>
			<div className={"relative w-full h-[230px]"}>
				<Image
					fill={true}
					src={imageUrl}
					alt={title}
					sizes="(max-width: 768px) 100vw"
					className={"w-full h-auto rounded-xl"}
				/>
			</div>
			<CardContent className={"space-y-4 py-6 "}>
				<Typography
					size={"heading4"}
					thick={"bold"}
					color={"default"}
					className={"capitalize"}
					as={"h4"}>
					{title}
				</Typography>
				<Review
					reviewCount={reviewCount}
					rating={rating}
					duration={duration}
				/>
				<Price
					title={title}
					price={price}
				/>
			</CardContent>
		</Card>
	);
};

const Review = ({
	reviewCount,
	duration,
	rating,
}: Pick<CourseBigCardType, "reviewCount" | "duration" | "rating">) => {
	const durationObject = millisecondsToHoursMinutesSeconds(duration);
	return (
		<div className={"flex flex-row  items-center"}>
			<div
				className={"flex flex-row gap-3 items-center w-full justify-between"}>
				{/* RATING */}
				<Typography
					size={"textM"}
					className={"flex gap-2 items-center justify-center"}>
					<IconStar className="text-primary fill-primary w-5 h-5" />
					{rating} ({reviewCount})
				</Typography>
				{/* DURATION */}
				<Typography
					size={"textM"}
					className={"flex gap-2 items-center"}>
					<Iconclock className={"w-6 h-6"} />
					{durationObject.hours}:{durationObject.minutes}
				</Typography>
			</div>
		</div>
	);
};

const Price = ({
	price,
	title,
}: Pick<CourseBigCardType, "price" | "title">) => (
	<div className={"flex flex-row justify-between items-center mt-4"}>
		<Typography
			size={"heading4"}
			thick={"bold"}
			color={"primary"}>
			{formatRupiah(price)}
		</Typography>
		<Link href={`/course/${StringToUrlFormat(title, "encrypt")}`}>
			<Button
				size={"medium"}
				variant={"secondary"}>
				See Details
			</Button>
		</Link>
	</div>
);

export default CourseBigCard;
