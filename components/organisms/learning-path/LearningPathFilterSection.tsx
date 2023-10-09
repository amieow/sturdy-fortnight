import Typography from "@/components/atoms/Typography";
import {Button} from "@/components/atoms/Button";
import {IconEditRounded, IconGroupStarRight} from "@/components/atoms/icon";
import {ScrollArea} from "@/components/atoms/ScrollArea";

const LearningPathFilterSection = () => (
    <section className={"relative pt-20 pb-12 px-4 md:px-24"}>
        <Typography size={"heading1"} as={"h1"} thick={"bold"} className={"text-center lg:text-left"}>
            Learning Paths
        </Typography>
        <div className={"flex flex-col text-center lg:text-left lg:flex-row  mt-8 items-center gap-8"}>
            <Typography
                size={"heading4"}
                as={"h6"}
                color={"muted"}
                className={"max-w-lg"}
            >
                What are you waiting for, now is the time to develop your skills
                according to your learning interests.
            </Typography>
            <ScrollArea className="w-[1200px] lg:basis-3/4">
                <div className={"gap-4  relative w-full flex"}>
                    <Button variant={"primary"} size={"extraLarge"}
                            className={"w-[300px] items-center flex gap-4 !h-28 !rounded-2xl !px-4"}>
                        <div className={"w-[54px] h-[54px] p-2 rounded-full bg-neutral08"}><IconEditRounded
                            className={"text-primary mx-auto w-8 h-8"}/></div>
                        Website Development
                    </Button>
                    <Button variant={"secondary"} size={"extraLarge"}
                            className={"w-[300px] items-center flex gap-4 !h-28 !rounded-2xl border-white !text-white  !px-4"}>
                        <div
                            className={"w-[54px] h-[54px] p-2 rounded-full bg-white text-heading4 text-neutral08"}>{`</>`}</div>
                        UI/UX Design & Research
                    </Button>
                </div>
            </ScrollArea>

        </div>
        <IconGroupStarRight className={"hidden lg:block absolute right-10 top-12"}/>
    </section>
);

export default LearningPathFilterSection;
