import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
} from "@/components/atoms/Card";
import Typography from "@/components/atoms/Typography";
import { Button } from "@/components/atoms/Button";
import Image from "next/image";
import { IconTripleDotVertical, Iconinfo } from "@/components/atoms/icon";
import { StarFilledIcon } from "@radix-ui/react-icons";

const DashboardPointCard = () => (
	<Card className={"lg:w-[400px] pb-0"}>
		<CardHeader className={"flex flex-row justify-between items-start"}>
			<Typography
				size={"heading4"}
				as={"h4"}
				thick={"semibold"}
				className={"max-wlg"}>
				Let’s study longer to more Points!
			</Typography>
			<Typography
				size={"textXl"}
				thick={"semibold"}>
				<IconTripleDotVertical />
			</Typography>
		</CardHeader>
		<CardContent>
			<div
				className={
					"flex flex-row justify-between items-center bg-neutral05 rounded-xl p-3"
				}>
				<div className={"flex gap-3"}>
					<div
						className={
							"rounded-full w-12 h-12 bg-primary border-neutral01 border-[1px]"
						}>
						<Image
							width={150}
							height={150}
							src={"/profil.png"}
							alt={"Image Profil"}
						/>
					</div>
					<div>
						<Typography size={"textS"}>Your Point Today</Typography>
						<Typography
							size={"heading4"}
							color={"primary"}
							thick={"bold"}>
							500
						</Typography>
					</div>
				</div>

				<Iconinfo className={"text-neutral03 w-6 h-6"} />
			</div>
			<div className={"mt-4 space-y-2"}>
				<ItemText
					title={"Path Focused"}
					content={"UX Designer"}
				/>
				<ItemText
					title={"Current Tier"}
					content={"None"}
				/>
			</div>
		</CardContent>
		<CardFooter className={"flex justify-between items-center !pb-4"}>
			<div>
				<Typography size={"textS"}>350 More Points to be</Typography>
				<Typography
					size={"heading4"}
					as={"h4"}
					thick={"bold"}>
					EXPLORER
				</Typography>
			</div>
			<Button
				size={"large"}
				variant={"primary"}
				className={"bg-accent"}>
				<StarFilledIcon className={"text-white w-6 h-6"} />
			</Button>
		</CardFooter>
	</Card>
);

const ItemText = ({ title, content }: { title: string; content: string }) => (
	<div className={"flex justify-between items-center"}>
		<Typography size={"textM"}>{title}</Typography>
		<Typography size={"textXl"}>{content}</Typography>
	</div>
);

export default DashboardPointCard;
