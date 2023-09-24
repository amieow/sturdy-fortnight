import Typography from "@/components/atoms/Typography";
import {
  Iconfacebook,
  Iconinstagram,
  IconLogoVertical,
  IconTiktok,
  IconTwitter,
  IconYoutube,
} from "@/components/atoms/icon";
import Link from "next/link";

const Footer = () => {
  const footerLinks: FooterLinkType[] = [
    {
      title: "Course",
      links: [
        {
          title: "All Course",
          link: "/course",
        },
        {
          title: "UI Designer",
          link: "/course/ui-designer",
        },
        {
          title: "Front-End Developer",
          link: "/course/front-end-developer",
        },
      ],
    },
    {
      title: "Learning Path",
      links: [
        {
          title: "UI/UX Design & Research",
          link: "course/ui-ux-design",
        },
        {
          title: "Web Development",
          link: "course/web-development",
        },
      ],
    },
    {
      title: "About Us",
      links: [
        {
          title: "Company",
          link: "/company",
        },
        {
          title: "Career",
          link: "/career",
        },
      ],
    },
  ];
  return (
    <footer className={"container bg-neutral08 pb-12 pt-24"}>
      <div className={"flex flex-row justify-between"}>
        <div className={"space-y-6 max-w-[250px]"}>
          <IconLogoVertical />
          <Typography
            as={"h5"}
            size={"heading4"}
            thick={"semibold"}
            className={""}
          >
            Join now to get discounts and other offers!
          </Typography>
          <input
            className={"w-full"}
            placeholder={"Masukkan email untuk berlangganan"}
          />
          <Typography>
            Register your email to get various class offers, interesting
            promotions, and the latest news from us!
          </Typography>
        </div>

        <div className={"flex flex-row gap-8 h-fit"}>
          {footerLinks.map((props, index) => (
            <FooterLinks {...props} key={index} />
          ))}
          <div className={"space-y-2"}>
            <Typography as={"h5"} size={"textXl"} thick={"semibold"}>
              FAQ
            </Typography>
            <Typography as={"h5"} size={"textXl"} thick={"semibold"}>
              Privacy Policy
            </Typography>
          </div>
        </div>
      </div>
      <div className={"flex justify-between mt-8"}>
        <Typography color={"muted"}>
          © 2023 Copyright Schoolabs Inc.
        </Typography>
        <div className={"flex gap-6"}>
          <Iconinstagram className={"w-6 h-6"} />
          <IconYoutube className={"w-6 h-6"} />
          <IconTwitter className={"w-6 h-6"} />
          <Iconfacebook className={"w-6 h-6"} />
          <IconTiktok className={"w-6 h-6"} />
        </div>
      </div>
    </footer>
  );
};

type FooterLinkType = {
  title: string;
  links: { title: string; link: string }[];
};
const FooterLinks = ({ title, links }: FooterLinkType) => (
  <div className={"space-y-2"}>
    <Typography as={"h5"} size={"textXl"} thick={"semibold"}>
      {title}
    </Typography>
    <ul className={"space-y-4"}>
      {links.map(({ link, title }, index) => (
        <li key={index} className={"text-textM text-neutral02 text-left"}>
          <Link href={link}>{title}</Link>
        </li>
      ))}
    </ul>
  </div>
);

export default Footer;
