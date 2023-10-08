import Typography from "@/components/atoms/Typography";
import Image from "next/image";


const SectionVisionAboutUs = () => {

    return <section className={"py-12 container"}>
        <div className={"flex flex-col lg:flex-row w-full gap-12"}>
            <Image
                height={1000}
                width={1000}
                src={"/about-us/image3.png"}
                alt={"About Us Image"}
            />
            <div className={"flex-grow-0"}>
                <Typography as={"h4"} size={"heading1"} color={"primary"} thick={"bold"} className={"mb-2 leading-none"}>
                    Mission
                </Typography>
                <Typography size={"textL"}>To empower aspiring developers with the knowledge and skills to create exceptional user
                    experiences by seamlessly merging development and UI/UX design.
                </Typography>
                <Typography as={"h4"} size={"heading1"} color={"primary"} thick={"bold"} className={"mb-2 mt-8 leading-none"}>
                    Vision
                </Typography>
                <VisionList/>
            </div>
        </div>
    </section>
}

const VisionList = () => {
    const visions: { no: number, title: string, description: string }[] = [
        {
            no: 1,
            title: 'Innovation',
            description: 'We thrive on innovation, constantly pushing boundaries and challenging conventions. At Scholabs, creativity knows no limits.'
        },
        {
            no: 2,
            title: 'Community',
            description: 'We thrive on innovation, constantly pushing boundaries and challenging conventions. At Scholabs, creativity knows no limits.'
        },
        {
            no: 3,
            title: 'Excellence',
            description: 'We thrive on innovation, constantly pushing boundaries and challenging conventions. At Scholabs, creativity knows no limits.'
        },
    ]
    return <ul className={"space-y-4"}>
        {
            visions.map(({title, description, no}, key) => <li key={key}>
                <div className={"flex flex-row items-center gap-6"}>
                    <Typography as={"h3"} size={"display3"} className={"min-w-[30px]"}>{no}</Typography>
                    <div className={"space-y-2"}>
                        <Typography as={"h6"} size={"textXl"}>{title}</Typography>
                        <Typography size={"textL"} className={"font-light"}> {description}</Typography>
                    </div>
                </div>
            </li>)}
    </ul>
}

export default SectionVisionAboutUs
