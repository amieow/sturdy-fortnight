import { cn } from "@/lib/utils"
import Image from "next/image"
import * as React from "react"

const iconAvaible = {
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

type IconProps = React.HTMLProps<HTMLImageElement>

// export const IconAdd = React.forwardRef<HTMLImageElement, IconProps>(
// 	({ width, height, className }, ref) => {
// 		return (
// 			<Image
// 				ref={ref}
// 				alt="add-icons"
// 				width={Number(width) || DEFAULT_WIDTH_ICON}
// 				height={Number(height) || DEFAULT_HEIGHT_ICON}
// 				className={cn(className)}
// 				src={`${ICON_DIR}/${iconAvaible.add}.svg`}
// 			/>
// 		)
// 	}
// )
// IconAdd.displayName = "iconAdd"
// export const IconArrowRight = React.forwardRef<HTMLImageElement, IconProps>(
// 	({ width, height, className }, ref) => {
// 		return (
// 			<Image
// 				ref={ref}
// 				alt="Arrow-right-icons"
// 				width={Number(width) || DEFAULT_WIDTH_ICON}
// 				height={Number(height) || DEFAULT_HEIGHT_ICON}
// 				className={cn(className)}
// 				src={`${ICON_DIR}/${iconAvaible.arrowRight}.svg`}
// 			/>
// 		)
// 	}
// )
// IconArrowRight.displayName = "iconArrowRight"
// export const IconChart = React.forwardRef<HTMLImageElement, IconProps>(
// 	({ width, height, className }, ref) => {
// 		return (
// 			<Image
// 				ref={ref}
// 				alt="chart-icons"
// 				width={Number(width) || DEFAULT_WIDTH_ICON}
// 				height={Number(height) || DEFAULT_HEIGHT_ICON}
// 				className={cn(className)}
// 				src={`${ICON_DIR}/${iconAvaible.chart}.svg`}
// 			/>
// 		)
// 	}
// )
// IconChart.displayName = "iconChart"
// export const IconCheck = React.forwardRef<HTMLImageElement, IconProps>(
// 	({ width, height, className }, ref) => {
// 		return (
// 			<Image
// 				ref={ref}
// 				alt="check-icons"
// 				width={Number(width) || DEFAULT_WIDTH_ICON}
// 				height={Number(height) || DEFAULT_HEIGHT_ICON}
// 				className={cn(className)}
// 				src={`${ICON_DIR}/${iconAvaible.check}.svg`}
// 			/>
// 		)
// 	}
// )
// IconCheck.displayName = "IconCheck"

// export const IconChevronDown = React.forwardRef<HTMLImageElement, IconProps>(
// 	({ width, height, className }, ref) => {
// 		return (
// 			<Image
// 				ref={ref}
// 				alt="check-icons"
// 				width={Number(width) || DEFAULT_WIDTH_ICON}
// 				height={Number(height) || DEFAULT_HEIGHT_ICON}
// 				className={cn(className)}
// 				src={`${ICON_DIR}/${iconAvaible.chevronDown}.svg`}
// 			/>
// 		)
// 	}
// )
// IconChevronDown.displayName = "IconChevronDown"
// export const IconchevronUp = React.forwardRef<HTMLImageElement, IconProps>(
// 	({ width, height, className }, ref) => {
// 		return (
// 			<Image
// 				ref={ref}
// 				alt="check-icons"
// 				width={Number(width) || DEFAULT_WIDTH_ICON}
// 				height={Number(height) || DEFAULT_HEIGHT_ICON}
// 				className={cn(className)}
// 				src={`${ICON_DIR}/${iconAvaible.chevronUp}.svg`}
// 			/>
// 		)
// 	}
// )
// IconchevronUp.displayName = "IconchevronUp"

// export const Iconclock = React.forwardRef<HTMLImageElement, IconProps>(
// 	({ width, height, className }, ref) => {
// 		return (
// 			<Image
// 				ref={ref}
// 				alt="check-icons"
// 				width={Number(width) || DEFAULT_WIDTH_ICON}
// 				height={Number(height) || DEFAULT_HEIGHT_ICON}
// 				className={cn(className)}
// 				src={`${ICON_DIR}/${iconAvaible.clock}.svg`}
// 			/>
// 		)
// 	}
// )
// Iconclock.displayName = "Iconclock"
// export const Icondelete = React.forwardRef<HTMLImageElement, IconProps>(
// 	({ width, height, className }, ref) => {
// 		return (
// 			<Image
// 				ref={ref}
// 				alt="check-icons"
// 				width={Number(width) || DEFAULT_WIDTH_ICON}
// 				height={Number(height) || DEFAULT_HEIGHT_ICON}
// 				className={cn(className)}
// 				src={`${ICON_DIR}/${iconAvaible.delete}.svg`}
// 			/>
// 		)
// 	}
// )
// Icondelete.displayName = "Icondelete"
// export const Iconedit = React.forwardRef<HTMLImageElement, IconProps>(
// 	({ width, height, className }, ref) => {
// 		return (
// 			<Image
// 				ref={ref}
// 				alt="check-icons"
// 				width={Number(width) || DEFAULT_WIDTH_ICON}
// 				height={Number(height) || DEFAULT_HEIGHT_ICON}
// 				className={cn(className)}
// 				src={`${ICON_DIR}/${iconAvaible.edit}.svg`}
// 			/>
// 		)
// 	}
// )
// Iconedit.displayName = "Iconedit"
// export const Iconexit = React.forwardRef<HTMLImageElement, IconProps>(
// 	({ width, height, className }, ref) => {
// 		return (
// 			<Image
// 				ref={ref}
// 				alt="check-icons"
// 				width={Number(width) || DEFAULT_WIDTH_ICON}
// 				height={Number(height) || DEFAULT_HEIGHT_ICON}
// 				className={cn(className)}
// 				src={`${ICON_DIR}/${iconAvaible.exit}.svg`}
// 			/>
// 		)
// 	}
// )
// Iconexit.displayName = "Iconexit"
// export const Iconeye = React.forwardRef<HTMLImageElement, IconProps>(
// 	({ width, height, className }, ref) => {
// 		return (
// 			<Image
// 				ref={ref}
// 				alt="check-icons"
// 				width={Number(width) || DEFAULT_WIDTH_ICON}
// 				height={Number(height) || DEFAULT_HEIGHT_ICON}
// 				className={cn(className)}
// 				src={`${ICON_DIR}/${iconAvaible.eye}.svg`}
// 			/>
// 		)
// 	}
// )
// Iconeye.displayName = "Iconeye"
// export const Iconfacebook = React.forwardRef<HTMLImageElement, IconProps>(
// 	({ width, height, className }, ref) => {
// 		return (
// 			<Image
// 				ref={ref}
// 				alt="check-icons"
// 				width={Number(width) || DEFAULT_WIDTH_ICON}
// 				height={Number(height) || DEFAULT_HEIGHT_ICON}
// 				className={cn(className)}
// 				src={`${ICON_DIR}/${iconAvaible.facebook}.svg`}
// 			/>
// 		)
// 	}
// )
// Iconfacebook.displayName = "Iconfacebook"

// export const Iconhistory = React.forwardRef<HTMLImageElement, IconProps>(
// 	({ width, height, className }, ref) => {
// 		return (
// 			<Image
// 				ref={ref}
// 				alt="check-icons"
// 				width={Number(width) || DEFAULT_WIDTH_ICON}
// 				height={Number(height) || DEFAULT_HEIGHT_ICON}
// 				className={cn(className)}
// 				src={`${ICON_DIR}/${iconAvaible.history}.svg`}
// 			/>
// 		)
// 	}
// )
// Iconhistory.displayName = "Iconhistory"

// export const Iconhome = React.forwardRef<HTMLImageElement, IconProps>(
// 	({ width, height, className }, ref) => {
// 		return (
// 			<Image
// 				ref={ref}
// 				alt="check-icons"
// 				width={Number(width) || DEFAULT_WIDTH_ICON}
// 				height={Number(height) || DEFAULT_HEIGHT_ICON}
// 				className={cn(className)}
// 				src={`${ICON_DIR}/${iconAvaible.home}.svg`}
// 			/>
// 		)
// 	}
// )
// Iconhome.displayName = "Iconhome"
// export const Iconinfo = React.forwardRef<HTMLImageElement, IconProps>(
// 	({ width, height, className }, ref) => {
// 		return (
// 			<Image
// 				ref={ref}
// 				alt="check-icons"
// 				width={Number(width) || DEFAULT_WIDTH_ICON}
// 				height={Number(height) || DEFAULT_HEIGHT_ICON}
// 				className={cn(className)}
// 				src={`${ICON_DIR}/${iconAvaible.info}.svg`}
// 			/>
// 		)
// 	}
// )
// Iconinfo.displayName = "Iconinfo"
// export const Iconinstagram = React.forwardRef<HTMLImageElement, IconProps>(
// 	({ width, height, className }, ref) => {
// 		return (
// 			<Image
// 				ref={ref}
// 				alt="check-icons"
// 				width={Number(width) || DEFAULT_WIDTH_ICON}
// 				height={Number(height) || DEFAULT_HEIGHT_ICON}
// 				className={cn(className)}
// 				src={`${ICON_DIR}/${iconAvaible.instagram}.svg`}
// 			/>
// 		)
// 	}
// )
// Iconinstagram.displayName = "Iconinstagram"
// export const Iconeye = React.forwardRef<HTMLImageElement, IconProps>(
// 	({ width, height, className }, ref) => {
// 		return (
// 			<Image
// 				ref={ref}
// 				alt="check-icons"
// 				width={Number(width) || DEFAULT_WIDTH_ICON}
// 				height={Number(height) || DEFAULT_HEIGHT_ICON}
// 				className={cn(className)}
// 				src={`${ICON_DIR}/${iconAvaible.eye}.svg`}
// 			/>
// 		)
// 	}
// )
// Iconeye.displayName = "Iconeye"
