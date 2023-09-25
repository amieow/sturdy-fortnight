import Typography from "../atoms/Typography";
import { Iconinfo } from "../atoms/icon";
import { formatRupiah, formatUpperFirstcharSplit } from "@/lib/formatter";

export type PaymentDetailType = {
	course_price: number;
	discount: number;
	admin_cost: number;
	kode_unik: number;
};

type PaymentDetailCardProps = {
	title: string;
	price: number;
	isKodeUnik?: boolean;
};

const PaymentDetailCard = (props: PaymentDetailCardProps) => {
	const priceFormat = props.price != 0 ? formatRupiah(props.price) : "-";
	const titleFormat = formatUpperFirstcharSplit(props.title);
	return (
		<div className="flex justify-between">
			<Typography className=" text-neutral02">{titleFormat}</Typography>
			{props.isKodeUnik ? (
				<Typography
					thick="semibold"
					color="accent">{`+${priceFormat};-`}</Typography>
			) : (
				<Typography
					thick="semibold"
					className={"text-white"}>
					{priceFormat}
				</Typography>
			)}
		</div>
	);
};

const PaymentDetails = (props: PaymentDetailType) => {
	const totalTransfer = formatRupiah(
		Object.values(props).reduce((acc, value) => acc + value, 0),
	);
	return (
		<div className="flex flex-col gap-3">
			<div className="flex justify-between">
				<Typography
					thick={"semibold"}
					size={"textL"}>
					Payment Details
				</Typography>
				<Iconinfo />
			</div>
			<PaymentDetailCard
				price={props.course_price}
				title={"course price"}
			/>
			<PaymentDetailCard
				price={props.discount}
				title={"discount"}
			/>
			<PaymentDetailCard
				price={props.admin_cost}
				title={"admin cost"}
			/>
			<PaymentDetailCard
				price={props.kode_unik}
				title={"kode unik"}
				isKodeUnik
			/>
			<div className="flex justify-between">
				<Typography
					thick={"semibold"}
					size={"textXl"}>
					Total Transfer
				</Typography>
				<Typography
					thick={"semibold"}
					color={"primary"}
					size={"textXl"}>
					{totalTransfer}
				</Typography>
			</div>
		</div>
	);
};
export { PaymentDetails };
