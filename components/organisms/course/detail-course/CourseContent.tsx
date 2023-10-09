import Typography from "@/components/atoms/Typography";
import React from "react";

function CourseContent() {
	return (
		<aside className="p-6 bg-neutral06">
			<Typography
				as="h4"
				size={"textL"}
				thick="semibold">
				Course Content
			</Typography>
		</aside>
	);
}

export { CourseContent };
