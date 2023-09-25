import { Button } from "@/components/atoms/Button";
import Typography from "@/components/atoms/Typography";
import { LabelInput } from "@/components/atoms/input";
import {
	PaymentDetailType,
	PaymentDetails,
} from "@/components/molecules/CheckoutPaymentDetail";
import { PaymentMethod } from "@/components/molecules/CheckoutPaymetMethod";
import Link from "next/link";

const PromoAndEmail = () => {
	return (
		<div className="flex flex-col gap-3">
			<LabelInput
				title="Promo Code"
				placeholder="Insert promo code/discount coupon"
			/>
			<LabelInput
				title="Email"
				placeholder="Insert email address"
			/>
		</div>
	);
};

const PAYMENT_DETAIL: PaymentDetailType = {
	course_price: 150000,
	discount: 0,
	admin_cost: 5000,
	kode_unik: 145,
};
export default function Checkouts() {
	return (
		<div className="w-fit flex-shrink-0 flex">
			<div className="flex sticky top-3 flex-col h-fit bg-neutral06 p-6 gap-6 flex-shrink-0">
				<Typography
					fontFamily={"roboto"}
					size={"textXl"}
					className="text-center"
					thick={"bold"}>
					Checkout Out
				</Typography>
				<PaymentMethod />
				<PromoAndEmail />
				<PaymentDetails {...PAYMENT_DETAIL} />
				<Link href={"/cart/payment-complete"}>
					<Button
						className="py-3 w-full"
						size={"large"}
						variant={"primary"}>
						Complete the payment
					</Button>
				</Link>
			</div>
		</div>
	);
}
