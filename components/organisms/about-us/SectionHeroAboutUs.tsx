import Typography from "@/components/atoms/Typography";
import React from "react";
import Image from "next/image";

const SectionHeroAboutUs = () => (
	<section className={"text-center container"}>
		<Typography
			as={"h2"}
			size={"display2"}
			thick={"bold"}
			color={"primary"}
			className={"leading-none"}>
			Welcome to <span className={"text-accent"}>Schoolabs</span>
		</Typography>
		<Typography
			size={"heading3"}
			className={"mb-4 mt-2"}>
			Where Your Developer and UI/UX Skills Soar to New Heights!
		</Typography>
		<Typography className={"max-w-4xl mx-auto"}>
			At Schoolabs, we&apos;re dedicated to fueling your journey in the world of
			development and user-centric design. Our platform is the ultimate hub
			where coding meets creativity, and we&apos;re thrilled to have you join us
			on this exciting path.
		</Typography>

		<div
			className={
				"flex flex-col lg:flex-row mx-auto gap-8 mt-12 w-full justify-center"
			}>
			<Image
				src={"/about-us/image1.png"}
				alt={"About Us 1"}
				className=" max-lg:w-full max-lg:h-[311px] rounded"
				width={292}
				height={311}
			/>
			<Image
				src={"/about-us/image2.png"}
				alt={"About Us 2"}
				width={292}
				height={311}
				className=" max-lg:w-full max-lg:h-[311px] rounded"
			/>
		</div>
	</section>
);

export default SectionHeroAboutUs;
