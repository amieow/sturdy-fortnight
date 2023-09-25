import Typography from "@/components/atoms/Typography";
import { PaymentDetailCard } from "@/components/molecules/CheckoutPaymentDetail";
import { formatRupiah } from "@/lib/formatter";
import { sumAllinObject } from "@/lib/utils";
import React from "react";
type OrderDetailProps = {
	order_number: number;
	date: string;
	payment_method: string;
};

type PaymenDetailBannerProps = {
	title: string;
	detail: string | number;
	formatRupiah?: boolean;
	Index?: string | number;
};

const PaymenDetailBanner = (props: PaymenDetailBannerProps) => {
	const PriceOrString =
		Number.isSafeInteger(props.detail) && props.formatRupiah
			? formatRupiah(Number(props.detail))
			: props.detail;
	return (
		<div
			key={props.Index}
			className="flex justify-between">
			<Typography
				fontFamily="inter"
				thick={"light"}>
				{props.title}
			</Typography>
			<Typography
				fontFamily="inter"
				thick={"light"}>
				{PriceOrString}
			</Typography>
		</div>
	);
};

type MultiplePaymentDetailProps = {
	title?: string;
	children: React.ReactNode;
};

const MultiplePaymentDetail = (props: MultiplePaymentDetailProps) => (
	<div className="flex flex-col gap-1 px-2">
		{props.title && (
			<Typography
				thick="semibold"
				size={"textXl"}>
				{props.title}
			</Typography>
		)}
		<div className="flex flex-col gap-2">{props.children}</div>
	</div>
);
const OrderDetail = (props: OrderDetailProps) => {
	return (
		<MultiplePaymentDetail title="Order Details">
			<PaymenDetailBanner
				title="Order Number"
				detail={props.order_number}
			/>
			<PaymenDetailBanner
				title="Date"
				detail={props.date}
			/>
			<PaymenDetailBanner
				title="Payment method"
				detail={props.payment_method}
			/>
		</MultiplePaymentDetail>
	);
};

type ListCourseProps = {
	course: PaymenDetailBannerProps[];
};

const ListCourse = ({ course }: ListCourseProps) => {
	return (
		<MultiplePaymentDetail title="List course">
			{course.map((item, index) => {
				return (
					<PaymenDetailBanner
						formatRupiah
						key={index}
						Index={index}
						{...item}
					/>
				);
			})}
		</MultiplePaymentDetail>
	);
};

const COURSE = [
	{
		title: "UX Fundamental 101",
		detail: 150000,
	},
];

const Seperator = () => (
	<span className="bg-white w-full h-px bg-opacity-[0.45]"></span>
);

type SubTotalProps = {
	subtotal: number;
	admin_cost: number;
};

const SubTotal = (props: SubTotalProps) => {
	const total = sumAllinObject(props, { formated: true });
	return (
		<MultiplePaymentDetail>
			<PaymenDetailBanner
				title="Subtotal"
				formatRupiah
				detail={props.subtotal}
			/>
			<PaymenDetailBanner
				title="Admin Cost"
				formatRupiah
				detail={props.admin_cost}
			/>
			<PaymenDetailBanner
				title="Total"
				detail={total}
			/>
		</MultiplePaymentDetail>
	);
};

function PaymentDetail() {
	return (
		<div className="px-6 py-10 rounded-2xl flex flex-col w-full bg-neutral06 gap-[23px]">
			<OrderDetail
				order_number={202002}
				date="17,september 2012"
				payment_method="Bank"
			/>
			<Seperator />
			<ListCourse course={COURSE} />
			<Seperator />
			<SubTotal
				subtotal={150000}
				admin_cost={3000}
			/>
			<PaymentDetailCard
				price={150000}
				title={"course price"}
			/>
			<PaymentDetailCard
				price={0}
				title={"discount"}
			/>
			<PaymentDetailCard
				price={3000}
				title={"admin cost"}
			/>
			<PaymentDetailCard
				price={145}
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
					{formatRupiah(153145)}
				</Typography>
			</div>
		</div>
	);
}

export default PaymentDetail;
