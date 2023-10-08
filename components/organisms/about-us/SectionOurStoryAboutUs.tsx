import Typography from "@/components/atoms/Typography";
import React from "react";

const SectionOurStoryAboutUs = () => {
    return <section className={"container py-12 text-center space-y-4"}>
    <Typography as={"h2"} size={"display3"} thick={"bold"} color={"primary"}>Our Story</Typography>
    <Typography className={"max-w-4xl mx-auto"}>Scholabs began with a vision: to unite the worlds of development and UI/UX design. Founded by Kaka
    Dadani and Johnathan Bush in 2019, we set out to empower aspiring creators.
        Since then, we&apos;ve evolved into a dynamic community of passionate learners, breaking down the barriers
    between coding and design. Today, we&apos;re at the forefront of digital education, fueling innovation and
    collaboration.</Typography>
    </section>
}

export default SectionOurStoryAboutUs;
