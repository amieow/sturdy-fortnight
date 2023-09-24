import Link from "next/link";
import { ReactNode } from "react";
import { usePathname } from "next/navigation";

const DashboardMenuItem = ({
  link,
  title,
  icon,
  handleClick,
}: DashboardMenuType) => {
  const pathName = usePathname();

  return link ? (
    <Link href={link}>
      <div
        className={`flex gap-4 items-center hover:text-primary ${
          link === pathName && "text-primary"
        }`}
      >
        {icon}
        {title}
      </div>
    </Link>
  ) : (
    <div
      className={`flex gap-4 items-center cursor-pointer hover:text-primary ${
        link === pathName && "text-primaryHover"
      }`}
      onClick={handleClick}
    >
      {icon}
      {title}
    </div>
  );
};

export default DashboardMenuItem;

export type DashboardMenuType = {
  link?: string;
  handleClick?: () => void;
  title: string;
  icon: ReactNode;
};
