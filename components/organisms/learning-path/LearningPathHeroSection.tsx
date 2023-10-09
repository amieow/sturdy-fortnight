import Image from "next/image";
import Typography from "@/components/atoms/Typography";

const LearningPathHeroSection = () => (
	<section className={"py-6 pt-9 px-4 md:py-[62px]"}>
		<div
			className={
				"relative w-full h-[177px] sm:h-[300px] lg:h-[500px] text-center"
			}>
			<Image
				fill
				src={"/learning-path-hero.png"}
				alt={"Learning Path Hero Page"}
			/>
			<div
				className={
					"absolute mx-auto flex justify-center items-center w-full h-full"
				}>
				<Typography
					size={"display3"}
					thick={"bold"}
					className=" max-sm:text-[16px] max-lg:text-xl"
					as={"h1"}>
					Enhance Your Skills with Schoolabs!
				</Typography>
			</div>
		</div>
	</section>
);

export default LearningPathHeroSection;
