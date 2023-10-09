"use client";
import Typography from "@/components/atoms/Typography";
import React, { useState } from "react";
import Checkouts from "@/components/organisms/cart/checkout";
import { SelectSortBy } from "@/components/atoms/SelectSortingBy";
const Modal = dynamic(
	() => import("@/components/organisms/cart/payment-complete/Modal"),
	{ ssr: false },
);
import dynamic from "next/dynamic";
import { BottomContentCart } from "@/components/organisms/cart/CartAvaible";
export default function Pages() {
	const [ModalOpen, setModal] = useState(false);
	const toggle = () => setModal((bool) => !bool);
	return (
		<>
			<Modal
				open={ModalOpen}
				toggle={toggle}
			/>
			<main className="flex gap-7 max-lg:flex-col w-full container">
				<div className="flex flex-col w-full">
					<TopContentCart />
					<BottomContentCart />
				</div>
				<Checkouts toggle={toggle} />
			</main>
		</>
	);
}
const TopContentCart = () => (
	<div className="flex justify-between pt-16 pb-8 border-b w-full border-b-neutral01">
		<Typography
			size={"heading2"}
			thick={"bold"}
			as="h2">
			My Cart
		</Typography>
		<div className="flex gap-[10px] align-bottom justify-center items-center">
			<Typography
				size="textL"
				fontFamily={"inter"}
				className=" text-neutral02 flex-shrink-0 flex">
				Sort by
			</Typography>
			<SelectSortBy />
		</div>
	</div>
);
