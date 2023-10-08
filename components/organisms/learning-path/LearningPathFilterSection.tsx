import Typography from "@/components/atoms/Typography";
import { Button } from "@/components/atoms/Button";
import { IconEdit2 } from "@/components/atoms/icon";

const LearningPathFilterSection = () => (
	<section className={" py-10 md:py-16"}>
		<Typography
			size={"heading1"}
			as={"h1"}
			className=" max-md:text-center"
			thick={"bold"}>
			Learning Paths
		</Typography>
		<div className={"flex flex-col lg:flex-row gap-20 mt-8"}>
			<Typography
				size={"heading4"}
				as={"h6"}
				thick={"bold"}
				className={"md:max-w-lg max-md:text-center"}>
				What are you waiting for, now is the time to develop your skills
				according to your learning interests.
			</Typography>
			<div className={"flex max-sm:flex-col gap-8 w-full"}>
				<Button
					variant={"secondary"}
					size={"extraLarge"}
					className={
						"sm:w-1/2 border-neutral01 group focus:bg-neutral01 focus:text-neutral06 hover:bg-neutral01 p-6 items-center flex gap-3 hover:!text-black !text-neutral01"
					}>
					<span className=" p-2 bg-neutral01 text-black group-hover:bg-neutral06 group-hover:text-white rounded-full">{`</>`}</span>
					<Typography
						fontFamily={"inter"}
						thick={"semibold"}
						size={"textXl"}
						className="group-hover:text-black text-neutral01">
						Website Development
					</Typography>
				</Button>
				<Button
					variant={"primary"}
					size={"extraLarge"}
					className={"sm:w-1/2 gap-3 flex items-center"}>
					<span className=" bg-neutral06 text-primary p-3  rounded-full">
						<IconEdit2 className={"w-6 h-6 md:w-8 md:h-8"} />
					</span>
					<Typography
						thick={"semibold"}
						fontFamily={"inter"}
						className={"!text-neutral06"}
						size={"textXl"}>
						UI/UX Design & Research
					</Typography>
				</Button>
			</div>
		</div>
	</section>
);

export default LearningPathFilterSection;
