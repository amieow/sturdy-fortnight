import Image from "next/image";
import { Checkbox } from "../atoms/Checkbox";
import Typography from "../atoms/Typography";
import { IconStar, Icondelete } from "../atoms/icon";
import { formatRupiah } from "@/lib/formatter";
import { AccordionContent } from "@radix-ui/react-accordion";

export type CartCourseCardProps = {
	title: string;
	kelas: string;
	reviewCount: number;
	price: number;
	imageUrl: string;
};
const MAX_STAR_REVIEW = 5;

const Review = ({ reviewCount }: Pick<CartCourseCardProps, "reviewCount">) => {
	return (
		<div className="flex gap-2 h-fit">
			<div className=" flex gap-[5px] items-center">
				{Array.from({ length: MAX_STAR_REVIEW }, (_, i) => (
					<IconStar
						key={i}
						width={8}
						className=" fill-neutral01 text-neutral01"
					/>
				))}
			</div>
			<Typography
				thick={"light"}
				size={"textXS"}>
				({reviewCount})
			</Typography>
		</div>
	);
};

const ContentCard = (
	props: Pick<
		CartCourseCardProps,
		"title" | "imageUrl" | "reviewCount" | "kelas"
	>,
) => {
	return (
		<div className="flex gap-4 h-full">
			<div className=" relative w-[105px] rounded-[10px]">
				<Image
					src={props.imageUrl}
					alt="blur"
					objectFit="cover"
					className="rounded-[10px]"
					fill
				/>
			</div>
			<div className="flex flex-col">
				<Typography thick={"semibold"}>{props.title}</Typography>
				<Typography
					className="opacity-50"
					thick={"light"}>{`Kelas ${props.kelas}`}</Typography>
				<Review reviewCount={props.reviewCount} />
			</div>
		</div>
	);
};

const Pricing = ({ price }: Pick<CartCourseCardProps, "price">) => (
	<div className="flex flex-col h-20 justify-between px-[10px] ">
		<button className=" bg-[#D72525] ml-auto rounded-bl-xl p-2 w-fit">
			<Icondelete
				width={24}
				height={24}
			/>
		</button>
		<Typography
			color={"primary"}
			size={"textL"}
			className="pr-[10px]"
			thick={"semibold"}>
			{formatRupiah(price)}
		</Typography>
	</div>
);

export default function CartCourseCard(
	props: CartCourseCardProps & {
		addItemToSelected: (item: string) => void;
		removeItemFromSelected: (item: string) => void;
		isSelected: boolean;
	},
) {
	return (
		<AccordionContent className="flex px-[10px] justify-between items-center">
			<div className="flex gap-4 h-20 items-center">
				<Checkbox
					onClick={() =>
						props.isSelected
							? props.removeItemFromSelected(props.title)
							: props.addItemToSelected(props.title)
					}
					checked={props.isSelected}
					className=" w-[18px] h-[18px]"
				/>
				<ContentCard
					title={props.title}
					imageUrl={props.imageUrl}
					reviewCount={props.reviewCount}
					kelas={props.kelas}
				/>
			</div>
			<Pricing price={props.price} />
		</AccordionContent>
	);
}
