"use client";
import { useTheme } from "next-themes";
import { Button } from "@/components/atoms/Button";
import Typography from "@/components/atoms/Typography";
import { Card } from "@/components/atoms/Card";
import CourseMiniCard from "@/components/molecules/CourseMiniCard";

export default function Home() {
  // const { setTheme } = useTheme();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between py-24 container">
      <div className={"flex flex-row gap-4"}>
        {/*FILTER*/}
        <div className={"min-w-[250px]"}>This is filter</div>
        <div className={"grid grid-cols-3 gap-6"}>
          {[1, 2, 3].map((index) => (
            <CourseMiniCard
              title={"UX Design Fundamentals: Navigating User Journeys"}
              discountPrice={429000}
              price={150000}
              star={1}
              totalReview={3400}
              key={index}
              imageUrl={"/courses/course1.png"}
            />
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
