import Image from "next/image";
import Typography from "@/components/atoms/Typography";

const LearningPathHeroSection = () => (
  <section className={"container mx-8 md:mx-24"}>
    <div className={"relative w-full h-[500px] text-center"}>
      <Image
        fill
        src={"/learning-path-hero.png"}
        alt={"Learning Path Hero Page"}
      />
      <div
        className={
          "absolute mx-auto flex justify-center items-center w-full h-full"
        }
      >
        <Typography size={"display3"} thick={"bold"} as={"h1"}>
          Enhance Your Skills with Schoolabs!
        </Typography>
      </div>
    </div>
  </section>
);

export default LearningPathHeroSection;
