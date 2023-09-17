import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"
import Typography from "./Typography"

const levelStatusVariant = cva("px-[6px]", {
	variants: {
		status: {
			Begginer: "",
			Intermediate: "",
			Advanced: "",
			Master: "",
		},
	},
})

export interface LevelStatusProps
	extends React.HTMLProps<HTMLDivElement>,
		VariantProps<typeof levelStatusVariant> {}

const LevelStatus = React.forwardRef<HTMLDivElement, LevelStatusProps>(
	({ status = "Begginer", className, ...props }, ref) => {
		return (
			<div
				ref={ref}
				className={cn(levelStatusVariant({ status, className }))}
				{...props}>
				<Typography>{status}</Typography>
			</div>
		)
	}
)
LevelStatus.displayName = "LevelStatus"

export default LevelStatus
