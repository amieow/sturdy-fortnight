import { formatRupiah } from "@/lib/formatter";
import Link from "next/link";
import { HeaderDetailCourse } from "./HeaderDetailCourse";
import Typography from "@/components/atoms/Typography";
import { IconCart, IconPlus } from "@/components/atoms/icon";
import { CourseBigCardType } from "@/components/molecules/CourseBigCard";
import { Button } from "@/components/atoms/Button";

export interface RightPriceCardProps extends CourseBigCardType {
	author: string;
	discountPercent: number;
}

const Pricing = ({
	price,
	discountPercent,
}: Pick<RightPriceCardProps, "discountPercent" | "price">) => {
	const DiscountPrice = price - (discountPercent / 100) * price;
	return (
		<div className="flex justify-between">
			<Typography
				color="primary"
				thick="semibold"
				className="px-3 py-4 bg-[#FFC7C7] h-fit text-[#FF0000] rounded-xl ">
				{discountPercent}%
			</Typography>
			<div className="flex flex-col gap-1 items-end">
				<Typography
					color="muted"
					fontFamily="inter"
					size="textXl"
					thick="semibold"
					className="line-through text-[#9F9F9F]">
					{formatRupiah(price)}
				</Typography>
				<Typography
					fontFamily="inter"
					size={"heading3"}
					thick="bold"
					color="primary">
					{formatRupiah(DiscountPrice)}
				</Typography>
			</div>
		</div>
	);
};

const RightPriceCard = (props: RightPriceCardProps) => {
	return (
		<aside className=" px-[22px] py-4 flex h-fit sticky top-4 flex-col gap-4 bg-[#222222] w-full lg:max-w-sm">
			<HeaderDetailCourse
				title={props.title}
				rating={props.rating}
				reviewCount={props.reviewCount}
				duration={props.duration}
				author={props.author}
			/>
			<Typography className=" self-stretch">
				Take a comprehensive course in mastering the fundamentals of UI/UX,
				complete with a final project in the form of a real-world case study
				that can enhance your portfolio.
			</Typography>
			<Pricing
				price={props.price}
				discountPercent={props.discountPercent}
			/>
			<Button
				variant={"primary"}
				className="flex items-center justify-center"
				size={"large"}>
				Beli Sekarang{" "}
				<IconPlus
					className="ml-2"
					width={24}
					height={24}
				/>
			</Button>
			<Link href={"/cart"}>
				<Button
					size={"large"}
					className="flex items-center justify-center w-full"
					variant={"secondary"}>
					Masukkan Keranjang{" "}
					<IconCart
						className="ml-2"
						width={24}
						height={24}
					/>
				</Button>
			</Link>
		</aside>
	);
};

export default RightPriceCard;
