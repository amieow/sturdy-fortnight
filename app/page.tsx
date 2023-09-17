"use client"
import { useTheme } from "next-themes"
import { Button } from "@/components/atoms/Button"
import Typography from "@/components/atoms/Typography"

export default function Home() {
	// const { setTheme } = useTheme();
	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24 container">
			<h1 className={"font-poppins"}>THIS IS POPPINS</h1>
			<h1 className={"font-inter"}>THIS IS INTER</h1>
			<Typography
				as={"h1"}
				type={"display3"}
				font={"inter"}
				color={"primary"}>
				DISPLAY 3
			</Typography>
			{/*<Button*/}
			{/*  className={"bg-primary dark:bg-accent"}*/}
			{/*  onClick={() => setTheme("dark")}*/}
			{/*>*/}
			{/*  dark*/}
			{/*</Button>*/}
			{/* <LevelStatus status={"Intermediate"} /> */}
		</main>
	)
}
