"use client";
import {
	Dialog,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogContent,
} from "@/components/atoms/Dialog";
import Image from "next/image";
import React from "react";
import UndrawSentEmail from "@/public/undraw-mail-sent-re.png";
import { Button } from "@/components/atoms/Button";
import Link from "next/link";
function Modal({ open, toggle }: { open: boolean; toggle: () => void }) {
	return (
		<Dialog
			open={open}
			onOpenChange={toggle}>
			<DialogContent className=" bg-neutral06 px-16 gap-6 py-8 border-0 max-w-[420px]">
				<DialogHeader className=" justify-center items-center">
					<Image
						src={UndrawSentEmail}
						alt=""
						className="mb-8"
					/>

					<DialogTitle className="">Congratulations</DialogTitle>
					<DialogDescription className="text-center">
						Your payment was successful. Your course have been issued.
					</DialogDescription>
				</DialogHeader>
				<Link href={"/cart/payment-complete"}>
					<Button
						onClick={toggle}
						variant={"primary"}
						className="w-full focus-visible:outline-none"
						size={"large"}>
						Check the Invoice
					</Button>
				</Link>
			</DialogContent>
		</Dialog>
	);
}

export default Modal;
