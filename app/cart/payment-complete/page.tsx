import { Button } from "@/components/atoms/Button";
import Typography from "@/components/atoms/Typography";
import { IconCheckmarkCircle } from "@/components/atoms/icon";
import PaymentDetail from "@/components/organisms/cart/payment-complete/PaymentDetail";
import Link from "next/link";
import React from "react";
function Pages() {
	return (
		<>
			<main className=" max-w-[608px] mx-auto py-[42px] justify-center flex flex-col items-center gap-3">
				<IconCheckmarkCircle
					width={42}
					height={42}
				/>
				<Typography
					thick="bold"
					size={"heading2"}
					fontFamily="inter"
					className="text-white">{`Payment received, thank you.`}</Typography>
				<Typography
					fontFamily="inter"
					className="text-white">{`You'll receive an email with your purchase details.`}</Typography>
				<PaymentDetail />
				<Link href={"/course"}>
					<Button
						variant={"primary"}
						className="px-6"
						size={"large"}>
						Access My Course
					</Button>
				</Link>
				<Link href={"/"}>
					<Button
						variant={"tertiary"}
						size={"large"}
						className="px-6">
						Later, just go back to homepage
					</Button>
				</Link>
			</main>
		</>
	);
}

export default Pages;
