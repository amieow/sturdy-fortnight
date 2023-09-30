import {
	IconCart,
	IconLogoVertical,
	IconSearch,
} from "@/components/atoms/icon";
import { Button } from "@/components/atoms/Button";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
	const navLinks: { title: string; link: string }[] = [
		{
			title: "Home",
			link: "/",
		},
		{
			title: "Course",
			link: "/course",
		},
		{
			title: "Learning Path",
			link: "/learning-path",
		},
		{
			title: "About Us",
			link: "/about-us",
		},
	];
	return (
		<header
			className={
				"flex flex-row justify-between container py-6 items-center  bg-neutral08 "
			}>
			<IconLogoVertical />
			<nav>
				<ul className={"flex flex-row gap-12 text-textXl font-light"}>
					{navLinks.map((props, index) => (
						<HeaderLink
							{...props}
							key={index}
						/>
					))}
				</ul>
			</nav>
			<div className={"flex flex-row gap-5 items-center"}>
				<IconSearch className={"h-6 w-6 text-neutral04"} />
				<Link href={"/cart"}>
					<IconCart className={"h-6 w-6 text-neutral04"} />
				</Link>
				<Link href={"/login/signin"}>
					<Button>Sign In</Button>
				</Link>
			</div>
		</header>
	);
};

const HeaderLink = ({ link, title }: { link: string; title: string }) => {
	const pathname = usePathname();
	return (
		<li className={`${pathname === link && "text-primary"}`}>
			<Link href={link}>{title}</Link>
		</li>
	);
};
export default Header;
