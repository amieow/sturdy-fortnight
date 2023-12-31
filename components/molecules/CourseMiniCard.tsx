import { Card, CardContent } from "@/components/atoms/Card";
import Typography from "@/components/atoms/Typography";
import { formatRupiah } from "@/lib/formatter";
import Image from "next/image";
import { IconStar } from "../atoms/icon";

export type CourseMiniCardType = {
	imageUrl: string;
	title: string;
	discountPrice: number;
	price: number;
	rating: number;
	reviewCount: number;
};

const MAX_STAR_REVIEW = 5;
const CourseMiniCard = ({
	imageUrl,
	title,
	rating,
	reviewCount,
	price,
	discountPrice,
}: CourseMiniCardType) => {
	return (
		<Card className=" max-lg:shrink-0 h-full snap-center inline-block">
			<div className={"relative w-full h-[150px]"}>
				<Image
					fill={true}
					src={imageUrl}
					alt={title}
					className={"w-full h-[150px] rounded-xl"}
				/>
			</div>

			<CardContent className={"space-y-2 max-w-[280px] p-4 "}>
				<Typography
					size={"textL"}
					thick={"bold"}
					color={"default"}
					className={"capitalize"}
					as={"h4"}>
					{title}
				</Typography>
				<Review
					reviewCount={reviewCount}
					rating={rating}
				/>
				<Price
					price={price}
					discountPrice={discountPrice}
				/>
			</CardContent>
		</Card>
	);
};

const Review = ({
	reviewCount,
	rating,
}: Pick<CourseMiniCardType, "reviewCount" | "rating">) => {
	const minStar = Math.min(MAX_STAR_REVIEW, rating);
	return (
		<div className={"flex flex-row gap-3 items-center"}>
			{/*STAR*/}
			<div className={"flex flex-row gap-2"}>
				{Array.from({ length: minStar }, (_, i) => (
					<IconStar
						width={9}
						key={i}
						className="text-primary fill-primary"
					/>
				))}
				{Array.from(
					{ length: Math.max(0, MAX_STAR_REVIEW - minStar) },
					(_, i) => (
						<IconStar
							key={i}
							width={9}
							className="text-neutral05 fill-neutral05"
						/>
					),
				)}
			</div>
			<Typography size={"textXS"}>({reviewCount})</Typography>
		</div>
	);
};

const Price = ({
	discountPrice,
	price,
}: Pick<CourseMiniCardType, "discountPrice" | "price">) => (
	<div className={"flex flex-row gap-2"}>
		<Typography
			size={"textS"}
			thick={"bold"}
			className={"line-through"}>
			{formatRupiah(discountPrice)}
		</Typography>
		<Typography
			size={"textS"}
			thick={"bold"}
			color={"primary"}>
			{formatRupiah(price)}
		</Typography>
	</div>
);

export default CourseMiniCard;
