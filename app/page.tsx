"use client";
import { useTheme } from "next-themes";
import { Button } from "@/components/atoms/Button";
import Typography from "@/components/atoms/Typography";
import { Card } from "@/components/atoms/Card";
import CourseMiniCard from "@/components/molecules/CourseMiniCard";
import { COURSE_MINI_CARD_CONTENT } from "@/content/course";

export default function Home() {
  // const { setTheme } = useTheme();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between py-24 container">
      <div className={"flex flex-row gap-4"}>
        {/*FILTER*/}
        <div className={"min-w-[250px]"}>This is filter</div>
        <div className={"grid grid-cols-3 gap-6"}>
          {COURSE_MINI_CARD_CONTENT.map((props, index) => (
            <CourseMiniCard {...props} key={index} />
          ))}
        </div>
      </div>

      {/*<Button*/}
      {/*  className={"bg-primary dark:bg-accent"}*/}
      {/*  onClick={() => setTheme("dark")}*/}
      {/*>*/}
      {/*  dark*/}
      {/*</Button>*/}
      {/* <LevelStatus status={"Intermediate"} /> */}
    </main>
  );
}
