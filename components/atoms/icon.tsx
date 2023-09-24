import { cn } from "@/lib/utils";
import Image from "next/image";
import * as React from "react";
import { ChevronDown, Star } from "lucide-react";
const iconAvaible = {
	add: "add",
	arrowRight: "arrow-right",
	check: "check",
	cart: "cart",
	chevronDown: "chevron-down",
	chevronUp: "chevron-up",
	clock: "clock",
	delete: "delete",
	edit: "edit",
	exit: "exit",
	eye: "eye",
	facebook: "facebook",
	history: "history",
	home: "home",
	info: "info",
	instagram: "instagram",
	pinterest: "pinterest",
	play: "play",
	plusCircles: "plus-circle",
	resources: "resources",
	search: "search",
	setting: "setting",
	starball: "starball",
	statistic: "statistic",
	tiktok: "tiktok",
	tripleDotVertical: "tripledotvertical",
	twitter: "twitter",
	uncheck: "uncheck",
	youtube: "youtube",
};

const ICON_DIR = "/icon";
const DEFAULT_WIDTH_ICON = 24;
const DEFAULT_HEIGHT_ICON = 24;

type IconProps = {
	width?: number;
	height?: number;
	className?: string;
};

export const IconStar = ({
	width,
	height,
	size,
	...props
}: React.ComponentPropsWithoutRef<typeof Star>) => {
	return (
		<Star
			width={width || size || DEFAULT_WIDTH_ICON}
			height={height || size || DEFAULT_HEIGHT_ICON}
			{...props}
		/>
	);
};

export const IconAdd = ({ width, height, className }: IconProps) => {
	return (
		<Image
			alt="add-icons"
			width={Number(width) || DEFAULT_WIDTH_ICON}
			height={Number(height) || DEFAULT_HEIGHT_ICON}
			className={cn(className)}
			src={`${ICON_DIR}/${iconAvaible.add}.svg`}
		/>
	);
};

export const IconArrowRight = ({ width, height, className }: IconProps) => {
	return (
		<Image
			alt="Arrow-right-icons"
			width={Number(width) || DEFAULT_WIDTH_ICON}
			height={Number(height) || DEFAULT_HEIGHT_ICON}
			className={cn(className)}
			src={`${ICON_DIR}/${iconAvaible.arrowRight}.svg`}
		/>
	);
};

export const IconCart = ({ width, height, className }: IconProps) => {
	return (
		<Image
			alt="chart-icons"
			width={Number(width) || DEFAULT_WIDTH_ICON}
			height={Number(height) || DEFAULT_HEIGHT_ICON}
			className={cn(className)}
			src={`${ICON_DIR}/${iconAvaible.cart}.svg`}
		/>
	);
};

export const IconCheck = ({ width, height, className }: IconProps) => {
	return (
		<Image
			alt="check-icons"
			width={Number(width) || DEFAULT_WIDTH_ICON}
			height={Number(height) || DEFAULT_HEIGHT_ICON}
			className={cn(className)}
			src={`${ICON_DIR}/${iconAvaible.check}.svg`}
		/>
	);
};

export const IconChevronDown = ({
	width,
	height,
	size,
	...props
}: React.ComponentPropsWithoutRef<typeof ChevronDown>) => {
	return (
		<ChevronDown
			width={width || size || DEFAULT_WIDTH_ICON}
			height={height || size || DEFAULT_HEIGHT_ICON}
			{...props}
		/>
	);
};

export const IconchevronUp = ({ width, height, className }: IconProps) => {
	return (
		<Image
			alt="check-icons"
			width={Number(width) || DEFAULT_WIDTH_ICON}
			height={Number(height) || DEFAULT_HEIGHT_ICON}
			className={cn(className)}
			src={`${ICON_DIR}/${iconAvaible.chevronUp}.svg`}
		/>
	);
};

export const Iconclock = ({ width, height, className }: IconProps) => {
	return (
		<Image
			alt="check-icons"
			width={Number(width) || DEFAULT_WIDTH_ICON}
			height={Number(height) || DEFAULT_HEIGHT_ICON}
			className={cn(className)}
			src={`${ICON_DIR}/${iconAvaible.clock}.svg`}
		/>
	);
};

export const Icondelete = ({ width, height, className }: IconProps) => {
	return (
		<Image
			alt="check-icons"
			width={Number(width) || DEFAULT_WIDTH_ICON}
			height={Number(height) || DEFAULT_HEIGHT_ICON}
			className={cn(className)}
			src={`${ICON_DIR}/${iconAvaible.delete}.svg`}
		/>
	);
};

export const Iconedit = ({ width, height, className }: IconProps) => {
	return (
		<Image
			alt="check-icons"
			width={Number(width) || DEFAULT_WIDTH_ICON}
			height={Number(height) || DEFAULT_HEIGHT_ICON}
			className={cn(className)}
			src={`${ICON_DIR}/${iconAvaible.edit}.svg`}
		/>
	);
};

export const Iconexit = ({ width, height, className }: IconProps) => {
	return (
		<Image
			alt="check-icons"
			width={Number(width) || DEFAULT_WIDTH_ICON}
			height={Number(height) || DEFAULT_HEIGHT_ICON}
			className={cn(className)}
			src={`${ICON_DIR}/${iconAvaible.exit}.svg`}
		/>
	);
};
export const Iconeye = ({ width, height, className }: IconProps) => {
	return (
		<Image
			alt="check-icons"
			width={Number(width) || DEFAULT_WIDTH_ICON}
			height={Number(height) || DEFAULT_HEIGHT_ICON}
			className={cn(className)}
			src={`${ICON_DIR}/${iconAvaible.eye}.svg`}
		/>
	);
};

export const Iconfacebook = ({ width, height, className }: IconProps) => {
	return (
		<Image
			alt="check-icons"
			width={Number(width) || DEFAULT_WIDTH_ICON}
			height={Number(height) || DEFAULT_HEIGHT_ICON}
			className={cn(className)}
			src={`${ICON_DIR}/${iconAvaible.facebook}.svg`}
		/>
	);
};

export const Iconhistory = ({ width, height, className }: IconProps) => {
	return (
		<Image
			alt="check-icons"
			width={Number(width) || DEFAULT_WIDTH_ICON}
			height={Number(height) || DEFAULT_HEIGHT_ICON}
			className={cn(className)}
			src={`${ICON_DIR}/${iconAvaible.history}.svg`}
		/>
	);
};

export const Iconhome = ({ width, height, className }: IconProps) => {
	return (
		<Image
			alt="check-icons"
			width={Number(width) || DEFAULT_WIDTH_ICON}
			height={Number(height) || DEFAULT_HEIGHT_ICON}
			className={cn(className)}
			src={`${ICON_DIR}/${iconAvaible.home}.svg`}
		/>
	);
};

export const Iconinfo = ({ width, height, className }: IconProps) => {
	return (
		<Image
			alt="check-icons"
			width={Number(width) || DEFAULT_WIDTH_ICON}
			height={Number(height) || DEFAULT_HEIGHT_ICON}
			className={cn(className)}
			src={`${ICON_DIR}/${iconAvaible.info}.svg`}
		/>
	);
};
export const Iconinstagram = ({ width, height, className }: IconProps) => {
	return (
		<Image
			alt="check-icons"
			width={Number(width) || DEFAULT_WIDTH_ICON}
			height={Number(height) || DEFAULT_HEIGHT_ICON}
			className={cn(className)}
			src={`${ICON_DIR}/${iconAvaible.instagram}.svg`}
		/>
	);
};
