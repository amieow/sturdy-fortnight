import Typography from "@/components/atoms/Typography";
import { Button } from "@/components/atoms/Button";
import Image from "next/image";
import {IconGroupStarLeft, IconGroupStarRight} from "@/components/atoms/icon";

const LandingHeroSection = () => {
  return (
    <section className={"min-h-screen"}>
      <div className={"container py-8 md:py-16 space-y-10 mx-auto"}>
          <div className={"relative"}>
              <HeadingText />
              <IconGroupStarLeft className={"absolute hidden lg:static left-0 bottom-0"} />
              <IconGroupStarRight className={"absolute hidden lg:static top-0 -right-8"} />
          </div>

        <div
          className={
            "relative w-[calc(100vw-32px)]  md:w-full h-[250px] md:h-[550px]"
          }
        >
          <Image fill src={"/landing-hero.png"} alt={"Hero Image"} />
        </div>
      </div>
    </section>
  );
};

const HeadingText = () => (
  <div className={"text-center space-y-6"}>
    <Typography
      size={"display1"}
      thick={"bold"}
      className={"mx-auto md:max-w-4xl leading-tight"}
      as={"h1"}
    >
      Unlock Your <span className={"text-accent"}>Full Potential</span> Elevate
      Your Skills with Our{" "}
      <span className={"text-primary"}> Expertly Crafted </span> Course
    </Typography>
    <Typography size={"textL"} className={"md:max-w-3xl mx-auto"} as={"h4"}>
      Transform your UI/UX and Website Development expertise with our
      industry-leading course. Master the art of crafting professional,
      user-centric websites that captivate and convert
    </Typography>
    <Button size={"large"} className={"w-[250px] font-bold"}>
      Get Started
    </Button>
  </div>
);

export default LandingHeroSection;
