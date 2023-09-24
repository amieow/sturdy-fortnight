import Typography from "@/components/atoms/Typography";
import * as React from "react";
import { ReactNode } from "react";

export type DashboardNotificationItemType = {
  title: string;
  description: string;
  date: string;
  extraButton?: ReactNode;
};

export default function DashboardNotificationItem({
  title,
  description,
  date,
  extraButton,
}: DashboardNotificationItemType) {
  return (
    <div>
      <div className={"space-y-2"}>
        <Typography size={"textXl"} thick={"semibold"} as={"h6"}>
          {title}
        </Typography>
        <Typography size={"textS"} color={"muted"}>
          {description}
        </Typography>
        <Typography size={"textS"} color={"muted"}>
          {date}
        </Typography>
      </div>
      {extraButton && (
        <div className={"w-full flex justify-end"}>{extraButton}</div>
      )}
    </div>
  );
}
