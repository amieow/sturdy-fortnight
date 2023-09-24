import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/atoms/Card";
import Typography from "@/components/atoms/Typography";
import * as React from "react";
import { Button } from "@/components/atoms/Button";
import DashboardNotificationItem, {
  DashboardNotificationItemType,
} from "@/components/molecules/DashboardNotificationItem";
import { IconTripleDotVertical } from "@/components/atoms/icon";
import { notifications } from "@/content/notification";

const DashboardNotificationCard = () => {
  return (
    <Card>
      <CardHeader className={"flex flex-row justify-between"}>
        <Typography as={"h4"} size={"heading4"} thick={"bold"}>
          Notification
        </Typography>
        <IconTripleDotVertical className={"w-6 h-6"} />
      </CardHeader>
      <CardContent className={"space-y-4"}>
        {notifications.map((props, index) => (
          <DashboardNotificationItem key={index} {...props} />
        ))}
      </CardContent>
    </Card>
  );
};

export default DashboardNotificationCard;
