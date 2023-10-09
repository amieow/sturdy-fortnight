import { Button } from "@/components/atoms/Button";
import { Dialog, DialogContent } from "../../atoms/Dialog";

import { FilterGroups } from "@/app/course/page";

export default function DialogFilterCourse(props: {
	open: boolean;
	toggle: () => void;
}) {
	return (
		<Dialog
			onOpenChange={props.toggle}
			open={props.open}>
			<DialogContent className=" border-0 p-3">
				<div className="bg-neutral08 space-y-0 p-4 rounded-2xl">
					<FilterGroups />
				</div>
			</DialogContent>
		</Dialog>
	);
}
