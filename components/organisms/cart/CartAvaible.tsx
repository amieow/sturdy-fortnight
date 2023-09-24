"use client";
import { Accordion, AccordionItem } from "@/components/atoms/Accordion";
import CartCourseCard, {
	CartCourseCardProps,
} from "@/components/molecules/CartCourseCard";
import ParentCartCourse from "@/components/molecules/ParentCartCourse";
import { cn } from "@/lib/utils";
import { useState } from "react";

const CART_AVAIBLE: CART_AVAIBLE_TYPE[] = [
	{
		title: "UX Design",
		subCart: [
			{
				title: "UX Fundamental 101",
				kelas: "Beginner",
				reviewCount: 3200,
				price: 150000,
				imageUrl: "/courses/course1.png",
			},
			{
				title: "UX Fundamental 102",
				kelas: "Beginner",
				reviewCount: 3200,
				price: 150000,
				imageUrl: "/courses/course1.png",
			},
			{
				title: "UX Fundamental 103",
				kelas: "Beginner",
				reviewCount: 3200,
				price: 150000,
				imageUrl: "/courses/course1.png",
			},
		],
	},
	{
		title: "Programer",
		subCart: [
			{
				title: "UX Fundamental 101",
				kelas: "Beginner",
				reviewCount: 3200,
				price: 150000,
				imageUrl: "/courses/course1.png",
			},
			{
				title: "UX Fundamental 102",
				kelas: "Beginner",
				reviewCount: 3200,
				price: 150000,
				imageUrl: "/courses/course1.png",
			},
			{
				title: "UX Fundamental 103",
				kelas: "Beginner",
				reviewCount: 3200,
				price: 150000,
				imageUrl: "/courses/course1.png",
			},
		],
	},
];
type CART_AVAIBLE_TYPE = {
	title: string;
	subCart: CartCourseCardProps[];
};
const AccordionCart = (parentItem: CART_AVAIBLE_TYPE, indexParent: number) => {
	const [isOpen, setOpen] = useState<string>(parentItem.title);
	const [selected, setSelected] = useState<string[]>([]);
	const addItemToSelected = (item: string) => {
		setSelected((prevSelected) => [...prevSelected, item]);
	};
	const removeItemFromSelected = (item: string) => {
		setSelected((prevSelected) =>
			prevSelected.filter((selectedItem) => selectedItem !== item),
		);
	};
	const reset = () => setSelected([]);
	const toggle = () =>
		setOpen((val) => (val == parentItem.title ? "-" : parentItem.title));
	const isSelectedParentCart = selected.length > 0;
	return (
		<Accordion
			type="single"
			value={isOpen}
			key={indexParent}>
			<AccordionItem
				className=" gap-5 h-fit flex flex-col"
				value={parentItem.title}>
				<ParentCartCourse
					isSelected={isSelectedParentCart}
					toggleAccordion={toggle}
					reset={reset}
					title={parentItem.title}
				/>
				<div
					className={cn({
						"gap-5 flex flex-col ": isOpen == parentItem.title,
					})}>
					{parentItem.subCart.map((subItem, indexSub) => (
						<CartCourseCard
							isSelected={selected.includes(subItem.title)}
							addItemToSelected={addItemToSelected}
							removeItemFromSelected={removeItemFromSelected}
							key={indexSub}
							{...subItem}
						/>
					))}
				</div>
			</AccordionItem>
		</Accordion>
	);
};
export const BottomContentCart = () => {
	return (
		<div className="flex flex-col mt-5 gap-5">
			{CART_AVAIBLE.map((parentItem, indexParent) =>
				AccordionCart(parentItem, indexParent),
			)}
		</div>
	);
};
