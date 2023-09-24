import { DashboardNotificationItemType } from "@/components/molecules/DashboardNotificationItem";
import { Button } from "@/components/atoms/Button";
import * as React from "react";

export const notifications: DashboardNotificationItemType[] = [
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
