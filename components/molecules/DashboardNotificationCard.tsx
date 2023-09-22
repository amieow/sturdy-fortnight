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

const DashboardNotificationCard = () => {
  const notifications: DashboardNotificationItemType[] = [
    {
      title: "Purchase Course",
      description: "Your payment course UX Fundamental 101 has been complete",
      date: "September 14, 2023",
    },
    {
      title: "UX Writing for Beginner",
      description: "Your submission for Chapter 1 - Task has been reviewed!",
      date: "September 14, 2023",
      extraButton: (
        <Button variant={"tertiary"} size={"small"}>
          See Review
        </Button>
      ),
    },
    {
      title: "UX Writing for Beginner",
      description: "Your submission for Chapter 1 - Task has been submitted!",
      date: "September 14, 2023",
      extraButton: (
        <Button variant={"tertiary"} size={"small"}>
          See Submission
        </Button>
      ),
    },
  ];
  return (
    <Card>
      <CardHeader className={"flex flex-row justify-between"}>
        <Typography as={"h4"} size={"heading4"} thick={"bold"}>
          Notification
        </Typography>
        <div>:</div>
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
