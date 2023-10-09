import { DASHBOARD_MENU } from "../templates/DashboardLayout";
import Link from "next/link";
import { usePathname } from "next/navigation";
export default function DashboardNavMobile() {
	const pathName = usePathname();
	return (
		<div className=" flex w-full justify-between px-6 py-3 bg-neutral07 z-50 sm:justify-around md:hidden fixed bottom-0">
			{DASHBOARD_MENU.map((item, index) => {
				if (item.link) {
					return (
						<Link
							className={`p-2 hover:text-primary ${
								item.link === pathName && "text-primaryHover"
							}`}
							href={item.link}
							key={index}>
							{item.icon}
						</Link>
					);
				}
				return (
					<button
						className={`p-2 hover:text-primary ${
							item.link === pathName && "text-primaryHover"
						}`}
						key={index}
						onClick={item.handleClick}>
						{item.icon}
					</button>
				);
			})}
		</div>
	);
}
