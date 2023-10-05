import Typography from "@/components/atoms/Typography";

const AboutCourse = () => {
	const KEY_BENEFITS = [
		"Acquire the essential skills to become a UI/UX designer.",
		"Expand your knowledge in the realms of design and UX.",
		"Enhance your employment prospects in the design and technology sectors.",
	];
	return (
		<section
			className=" flex flex-col gap-5 py-8"
			id="about-course">
			<Typography
				size={"heading3"}
				thick="bold"
				as="h3">
				About Course
			</Typography>
			<Typography size={"textL"}>
				Online UI/UX Design courses are an effective way to delve into the world
				of user interface and user experience design. These courses are open to
				anyone, regardless of their design background. The curriculum covers
				design fundamentals, UX concepts, and hands-on projects. By enrolling in
				this course, participants will acquire the skills needed to craft
				efficient and effective digital products.
			</Typography>
			<div>
				<Typography size="textL">
					Here are some key benefits of taking an online UI/UX Design course:
				</Typography>
				<ol>
					{KEY_BENEFITS.map((text, index) => (
						<li
							className="list-decimal ml-4"
							key={index}>
							{text}
						</li>
					))}
				</ol>
			</div>
			<Typography size="textL">
				{`If you're interested in learning UI/UX Design, online courses are a
				fitting choice.`}
			</Typography>
		</section>
	);
};

export { AboutCourse };
