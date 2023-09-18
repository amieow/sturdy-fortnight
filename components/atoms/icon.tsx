import { cn } from "@/lib/utils"
import Image from "next/image"
import * as React from "react"

const ICON_AVAIBLE = {
	add: "add",
	arrowRight: "arrow-right",
	chart: "chart",
	check: "check",
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
  star: "star",
  starFill: "star-fill",
  starFillPrimary: "star-fill-primary",
	starball: "starball",
	statistic: "statistic",
	tiktok: "tiktok",
	tripleDotVertical: "tripledotvertical",
	twitter: "twitter",
	uncheck: "uncheck",
	youtube: "youtube",
}

const ICON_DIR = "/icon"
const DEFAULT_WIDTH_ICON = 24
const DEFAULT_HEIGHT_ICON = 24

type IconProps = {
	width?: number
	height?: number
	className?: string
}

export const IconAdd = ({ width, height, className }: IconProps) => {
	return (
		<Image
			alt="add-icons"
			width={Number(width) || DEFAULT_WIDTH_ICON}
			height={Number(height) || DEFAULT_HEIGHT_ICON}
			className={cn(className)}
			src={`${ICON_DIR}/${ICON_AVAIBLE.add}.svg`}
		/>
	)
}
export const IconArrowRight = ({ width, height, className }: IconProps) => {
	return (
		<Image
			alt="Arrow-right-icons"
			width={Number(width) || DEFAULT_WIDTH_ICON}
			height={Number(height) || DEFAULT_HEIGHT_ICON}
			className={cn(className)}
			src={`${ICON_DIR}/${ICON_AVAIBLE.arrowRight}.svg`}
		/>
	)
}
export const IconChart = ({ width, height, className }: IconProps) => {
	return (
		<Image
			alt="chart-icons"
			width={Number(width) || DEFAULT_WIDTH_ICON}
			height={Number(height) || DEFAULT_HEIGHT_ICON}
			className={cn(className)}
			src={`${ICON_DIR}/${ICON_AVAIBLE.chart}.svg`}
		/>
	)
}
export const IconCheck = ({ width, height, className }: IconProps) => {
	return (
		<Image
			alt="check-icons"
			width={Number(width) || DEFAULT_WIDTH_ICON}
			height={Number(height) || DEFAULT_HEIGHT_ICON}
			className={cn(className)}
			src={`${ICON_DIR}/${ICON_AVAIBLE.check}.svg`}
		/>
	)
}

export const IconChevronDown = ({ width, height, className }: IconProps) => {
	return (
		<Image
			alt="check-icons"
			width={Number(width) || DEFAULT_WIDTH_ICON}
			height={Number(height) || DEFAULT_HEIGHT_ICON}
			className={cn(className)}
			src={`${ICON_DIR}/${ICON_AVAIBLE.chevronDown}.svg`}
		/>
	)
}
export const IconChevronUp = ({ width, height, className }: IconProps) => {
	return (
		<Image
			alt="check-icons"
			width={Number(width) || DEFAULT_WIDTH_ICON}
			height={Number(height) || DEFAULT_HEIGHT_ICON}
			className={cn(className)}
			src={`${ICON_DIR}/${ICON_AVAIBLE.chevronUp}.svg`}
		/>
	)
}

export const IconClock = ({ width, height, className }: IconProps) => {
	return (
		<Image
			alt="check-icons"
			width={Number(width) || DEFAULT_WIDTH_ICON}
			height={Number(height) || DEFAULT_HEIGHT_ICON}
			className={cn(className)}
			src={`${ICON_DIR}/${ICON_AVAIBLE.clock}.svg`}
		/>
	)
}
export const IconDelete = ({ width, height, className }: IconProps) => {
	return (
		<Image
			alt="check-icons"
			width={Number(width) || DEFAULT_WIDTH_ICON}
			height={Number(height) || DEFAULT_HEIGHT_ICON}
			className={cn(className)}
			src={`${ICON_DIR}/${ICON_AVAIBLE.delete}.svg`}
		/>
	)
}
export const IconEdit = ({ width, height, className }: IconProps) => {
	return (
		<Image
			alt="check-icons"
			width={Number(width) || DEFAULT_WIDTH_ICON}
			height={Number(height) || DEFAULT_HEIGHT_ICON}
			className={cn(className)}
			src={`${ICON_DIR}/${ICON_AVAIBLE.edit}.svg`}
		/>
	)
}
export const IconExit = ({ width, height, className }: IconProps) => {
	return (
		<Image
			alt="check-icons"
			width={Number(width) || DEFAULT_WIDTH_ICON}
			height={Number(height) || DEFAULT_HEIGHT_ICON}
			className={cn(className)}
			src={`${ICON_DIR}/${ICON_AVAIBLE.exit}.svg`}
		/>
	)
}
export const IconEye = ({ width, height, className }: IconProps) => {
	return (
		<Image
			alt="check-icons"
			width={Number(width) || DEFAULT_WIDTH_ICON}
			height={Number(height) || DEFAULT_HEIGHT_ICON}
			className={cn(className)}
			src={`${ICON_DIR}/${ICON_AVAIBLE.eye}.svg`}
		/>
	)
}
export const Iconfacebook = ({ width, height, className }: IconProps) => {
	return (
		<Image
			alt="check-icons"
			width={Number(width) || DEFAULT_WIDTH_ICON}
			height={Number(height) || DEFAULT_HEIGHT_ICON}
			className={cn(className)}
			src={`${ICON_DIR}/${ICON_AVAIBLE.facebook}.svg`}
		/>
	)
}

export const IconHistory = ({ width, height, className }: IconProps) => {
	return (
		<Image
			alt="check-icons"
			width={Number(width) || DEFAULT_WIDTH_ICON}
			height={Number(height) || DEFAULT_HEIGHT_ICON}
			className={cn(className)}
			src={`${ICON_DIR}/${ICON_AVAIBLE.history}.svg`}
		/>
	)
}

export const IconHome = ({ width, height, className }: IconProps) => {
	return (
		<Image
			alt="check-icons"
			width={Number(width) || DEFAULT_WIDTH_ICON}
			height={Number(height) || DEFAULT_HEIGHT_ICON}
			className={cn(className)}
			src={`${ICON_DIR}/${ICON_AVAIBLE.home}.svg`}
		/>
	)
}
export const IconInfo = ({ width, height, className }: IconProps) => {
	return (
		<Image
			alt="check-icons"
			width={Number(width) || DEFAULT_WIDTH_ICON}
			height={Number(height) || DEFAULT_HEIGHT_ICON}
			className={cn(className)}
			src={`${ICON_DIR}/${ICON_AVAIBLE.info}.svg`}
		/>
	)
}
export const IconInstagram = ({ width, height, className }: IconProps) => {
	return (
		<Image
			alt="check-icons"
			width={Number(width) || DEFAULT_WIDTH_ICON}
			height={Number(height) || DEFAULT_HEIGHT_ICON}
			className={cn(className)}
			src={`${ICON_DIR}/${ICON_AVAIBLE.instagram}.svg`}
		/>
	)
}
export const IconPinterest = ({ width, height, className }: IconProps) => {
	return (
		<Image
			alt="check-icons"
			width={Number(width) || DEFAULT_WIDTH_ICON}
			height={Number(height) || DEFAULT_HEIGHT_ICON}
			className={cn(className)}
			src={`${ICON_DIR}/${ICON_AVAIBLE.pinterest}.svg`}
		/>
	)
}
export const IconPlay = ({ width, height, className }: IconProps) => {
	return (
		<Image
			alt="check-icons"
			width={Number(width) || DEFAULT_WIDTH_ICON}
			height={Number(height) || DEFAULT_HEIGHT_ICON}
			className={cn(className)}
			src={`${ICON_DIR}/${ICON_AVAIBLE.play}.svg`}
		/>
	)
}
export const IconPlusCircles = ({ width, height, className }: IconProps) => {
	return (
		<Image
			alt="check-icons"
			width={Number(width) || DEFAULT_WIDTH_ICON}
			height={Number(height) || DEFAULT_HEIGHT_ICON}
			className={cn(className)}
			src={`${ICON_DIR}/${ICON_AVAIBLE.plusCircles}.svg`}
		/>
	)
}
export const IconResources = ({ width, height, className }: IconProps) => {
	return (
		<Image
			alt="check-icons"
			width={Number(width) || DEFAULT_WIDTH_ICON}
			height={Number(height) || DEFAULT_HEIGHT_ICON}
			className={cn(className)}
			src={`${ICON_DIR}/${ICON_AVAIBLE.resources}.svg`}
		/>
	)
}
export const IconSearch = ({ width, height, className }: IconProps) => {
	return (
		<Image
			alt="check-icons"
			width={Number(width) || DEFAULT_WIDTH_ICON}
			height={Number(height) || DEFAULT_HEIGHT_ICON}
			className={cn(className)}
			src={`${ICON_DIR}/${ICON_AVAIBLE.search}.svg`}
		/>
	)
}
export const IconSetting = ({ width, height, className }: IconProps) => {
	return (
		<Image
			alt="check-icons"
			width={Number(width) || DEFAULT_WIDTH_ICON}
			height={Number(height) || DEFAULT_HEIGHT_ICON}
			className={cn(className)}
			src={`${ICON_DIR}/${ICON_AVAIBLE.setting}.svg`}
		/>
	)
}
export const IconStar = ({ width, height, className }: IconProps) => {
	return (
		<Image
			alt="check-icons"
			width={Number(width) || DEFAULT_WIDTH_ICON}
			height={Number(height) || DEFAULT_HEIGHT_ICON}
			className={cn(className)}
			src={`${ICON_DIR}/${ICON_AVAIBLE.star}.svg`}
		/>
	)
}
export const IconStarFill = ({ width, height, className }: IconProps) => {
	return (
		<Image
      alt="check-icons"
			width={Number(width) || DEFAULT_WIDTH_ICON}
			height={Number(height) || DEFAULT_HEIGHT_ICON}
      className={cn(className)}
			src={`${ICON_DIR}/${ICON_AVAIBLE.starFill}.svg`}
		/>
	)
}
export const IconStarFillPrimary = ({ width, height, className }: IconProps) => {
	return (
		<Image
      alt="check-icons"
			width={Number(width) || DEFAULT_WIDTH_ICON}
			height={Number(height) || DEFAULT_HEIGHT_ICON}
      className={cn(className)}
			src={`${ICON_DIR}/${ICON_AVAIBLE.starFillPrimary}.svg`}
		/>
	)
}