import * as React from "react";
import { Star } from "lucide-react";
import IconStarBall from "@/public/icon/starball.svg";
import IconAdd from "@/public/icon/add.svg";
import IconArrowRight from "@/public/icon/arrow-right.svg";
import Iconclock from "@/public/icon/clock.svg";
import IconCart from "@/public/icon/cart.svg";
import IconCheck from "@/public/icon/check.svg";
import IconChevronDown from "@/public/icon/chevron-down.svg";
import IconchevronUp from "@/public/icon/chevron-up.svg";
import Icondelete from "@/public/icon/delete.svg";
import Iconedit from "@/public/icon/edit.svg";
import Iconexit from "@/public/icon/exit.svg";
import Iconeye from "@/public/icon/eye.svg";
import Iconfacebook from "@/public/icon/facebook.svg";
import Iconhistory from "@/public/icon/history.svg";
import Iconhome from "@/public/icon/home.svg";
import Iconinfo from "@/public/icon/info.svg";
import Iconinstagram from "@/public/icon/instagram.svg";
import IconPinterest from "@/public/icon/pinterest.svg";
import IconPlay from "@/public/icon/play.svg";
import IconPlusCircle from "@/public/icon/plus-circle.svg";
import IconResources from "@/public/icon/resources.svg";
import IconSearch from "@/public/icon/search.svg";
import IconSetting from "@/public/icon/setting.svg";
import IconStatistic from "@/public/icon/statistic.svg";
import IconTiktok from "@/public/icon/tiktok.svg";
import IconTripleDotVertical from "@/public/icon/tripledotvertical.svg";
import IconTwitter from "@/public/icon/twitter.svg";
import IconUncheck from "@/public/icon/uncheck.svg";
import IconYoutube from "@/public/icon/youtube.svg";
import IconLogoVertical from "@/public/logo-vertical.svg";

export {
  IconStarBall,
  IconStar,
  IconAdd,
  IconArrowRight,
  IconCart,
  IconCheck,
  IconChevronDown,
  IconchevronUp,
  Iconclock,
  Icondelete,
  Iconedit,
  Iconexit,
  Iconeye,
  Iconfacebook,
  Iconhistory,
  Iconhome,
  Iconinfo,
  Iconinstagram,
  IconPinterest,
  IconPlay,
  IconPlusCircle,
  IconResources,
  IconSearch,
  IconSetting,
  IconStatistic,
  IconTiktok,
  IconTripleDotVertical,
  IconTwitter,
  IconUncheck,
  IconYoutube,
  IconLogoVertical,
};
const IconStar = ({ width, height, className }: IconProps) => {
  return (
    <Star
      width={width || DEFAULT_WIDTH_ICON}
      height={height || DEFAULT_HEIGHT_ICON}
      className={className}
    />
  );
};

// const iconAvaible = {
//   add: "add",
//   arrowRight: "arrow-right",
//   check: "check",
//   cart: "cart",
//   chevronDown: "chevron-down",
//   chevronUp: "chevron-up",
//   clock: "clock",
//   delete: "delete",
//   edit: "edit",
//   exit: "exit",
//   eye: "eye",
//   facebook: "facebook",
//   history: "history",
//   home: "home",
//   info: "info",
//   instagram: "instagram",
//   pinterest: "pinterest",
//   play: "play",
//   plusCircles: "plus-circle",
//   resources: "resources",
//   search: "search",
//   setting: "setting",
//   starball: "starball",
//   statistic: "statistic",
//   tiktok: "tiktok",
//   tripleDotVertical: "tripledotvertical",
//   twitter: "twitter",
//   uncheck: "uncheck",
//   youtube: "youtube",
// };
//
//
const ICON_DIR = "/icon";
const DEFAULT_WIDTH_ICON = 24;
const DEFAULT_HEIGHT_ICON = 24;

type IconProps = {
  width?: number;
  height?: number;
  className?: string;
};

// export const IconAdd = ({ width, height, className }: IconProps) => {
//   return (
//     <Image
//       alt="add-icons"
//       width={Number(width) || DEFAULT_WIDTH_ICON}
//       height={Number(height) || DEFAULT_HEIGHT_ICON}
//       className={cn(className)}
//       src={`${ICON_DIR}/${iconAvaible.add}.svg`}
//     />
//   );
// };

// export const IconArrowRight = ({ width, height, className }: IconProps) => {
//   return (
//     <Image
//       alt="Arrow-right-icons"
//       width={Number(width) || DEFAULT_WIDTH_ICON}
//       height={Number(height) || DEFAULT_HEIGHT_ICON}
//       className={cn(className)}
//       src={`${ICON_DIR}/${iconAvaible.arrowRight}.svg`}
//     />
//   );
// };

// export const IconCart = ({ width, height, className }: IconProps) => {
//   return (
//     <Image
//       alt="chart-icons"
//       width={Number(width) || DEFAULT_WIDTH_ICON}
//       height={Number(height) || DEFAULT_HEIGHT_ICON}
//       className={cn(className)}
//       src={`${ICON_DIR}/${iconAvaible.cart}.svg`}
//     />
//   );
// };
//
// export const IconCheck = ({ width, height, className }: IconProps) => {
//   return (
//     <Image
//       alt="check-icons"
//       width={Number(width) || DEFAULT_WIDTH_ICON}
//       height={Number(height) || DEFAULT_HEIGHT_ICON}
//       className={cn(className)}
//       src={`${ICON_DIR}/${iconAvaible.check}.svg`}
//     />
//   );
// };
//
// export const IconChevronDown = ({ width, height, className }: IconProps) => {
//   return (
//     <Image
//       alt="check-icons"
//       width={Number(width) || DEFAULT_WIDTH_ICON}
//       height={Number(height) || DEFAULT_HEIGHT_ICON}
//       className={cn(className)}
//       src={`${ICON_DIR}/${iconAvaible.chevronDown}.svg`}
//     />
//   );
// };
//
// export const IconchevronUp = ({ width, height, className }: IconProps) => {
//   return (
//     <Image
//       alt="check-icons"
//       width={Number(width) || DEFAULT_WIDTH_ICON}
//       height={Number(height) || DEFAULT_HEIGHT_ICON}
//       className={cn(className)}
//       src={`${ICON_DIR}/${iconAvaible.chevronUp}.svg`}
//     />
//   );
// };
//
// export const Iconclock = ({ width, height, className }: IconProps) => {
//   return (
//     <Image
//       alt="check-icons"
//       width={Number(width) || DEFAULT_WIDTH_ICON}
//       height={Number(height) || DEFAULT_HEIGHT_ICON}
//       className={cn(className)}
//       src={`${ICON_DIR}/${iconAvaible.clock}.svg`}
//     />
//   );
// };
//
// export const Icondelete = ({ width, height, className }: IconProps) => {
//   return (
//     <Image
//       alt="check-icons"
//       width={Number(width) || DEFAULT_WIDTH_ICON}
//       height={Number(height) || DEFAULT_HEIGHT_ICON}
//       className={cn(className)}
//       src={`${ICON_DIR}/${iconAvaible.delete}.svg`}
//     />
//   );
// };
//
// export const Iconedit = ({ width, height, className }: IconProps) => {
//   return (
//     <Image
//       alt="check-icons"
//       width={Number(width) || DEFAULT_WIDTH_ICON}
//       height={Number(height) || DEFAULT_HEIGHT_ICON}
//       className={cn(className)}
//       src={`${ICON_DIR}/${iconAvaible.edit}.svg`}
//     />
//   );
// };
//
// export const Iconexit = ({ width, height, className }: IconProps) => {
//   return (
//     <Image
//       alt="check-icons"
//       width={Number(width) || DEFAULT_WIDTH_ICON}
//       height={Number(height) || DEFAULT_HEIGHT_ICON}
//       className={cn(className)}
//       src={`${ICON_DIR}/${iconAvaible.exit}.svg`}
//     />
//   );
// };
// export const Iconeye = ({ width, height, className }: IconProps) => {
//   return (
//     <Image
//       alt="check-icons"
//       width={Number(width) || DEFAULT_WIDTH_ICON}
//       height={Number(height) || DEFAULT_HEIGHT_ICON}
//       className={cn(className)}
//       src={`${ICON_DIR}/${iconAvaible.eye}.svg`}
//     />
//   );
// };
//
// export const Iconfacebook = ({ width, height, className }: IconProps) => {
//   return (
//     <Image
//       alt="check-icons"
//       width={Number(width) || DEFAULT_WIDTH_ICON}
//       height={Number(height) || DEFAULT_HEIGHT_ICON}
//       className={cn(className)}
//       src={`${ICON_DIR}/${iconAvaible.facebook}.svg`}
//     />
//   );
// };
//
// export const Iconhistory = ({ width, height, className }: IconProps) => {
//   return (
//     <Image
//       alt="check-icons"
//       width={Number(width) || DEFAULT_WIDTH_ICON}
//       height={Number(height) || DEFAULT_HEIGHT_ICON}
//       className={cn(className)}
//       src={`${ICON_DIR}/${iconAvaible.history}.svg`}
//     />
//   );
// };
//
// export const Iconhome = ({ width, height, className }: IconProps) => {
//   return (
//     <Image
//       alt="check-icons"
//       width={Number(width) || DEFAULT_WIDTH_ICON}
//       height={Number(height) || DEFAULT_HEIGHT_ICON}
//       className={cn(className)}
//       src={`${ICON_DIR}/${iconAvaible.home}.svg`}
//     />
//   );
// };
//
// export const Iconinfo = ({ width, height, className }: IconProps) => {
//   return (
//     <Image
//       alt="check-icons"
//       width={Number(width) || DEFAULT_WIDTH_ICON}
//       height={Number(height) || DEFAULT_HEIGHT_ICON}
//       className={cn(className)}
//       src={`${ICON_DIR}/${iconAvaible.info}.svg`}
//     />
//   );
// };
// export const Iconinstagram = ({ width, height, className }: IconProps) => {
//   return (
//     <Image
//       alt="check-icons"
//       width={Number(width) || DEFAULT_WIDTH_ICON}
//       height={Number(height) || DEFAULT_HEIGHT_ICON}
//       className={cn(className)}
//       src={`${ICON_DIR}/${iconAvaible.instagram}.svg`}
//     />
//   );
// };
