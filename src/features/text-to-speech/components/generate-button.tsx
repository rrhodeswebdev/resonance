"use client";

import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";

export function GenerateButton({
	size,
	disabled,
	isSubmitting,
	onSubmit,
	className,
}: {
	size?: "default" | "sm";
	disabled: boolean;
	isSubmitting: boolean;
	onSubmit: () => void;
	className?: string;
}) {
	return (
		<Button
			className={className}
			disabled={disabled}
			onClick={onSubmit}
			size={size}
		>
			{isSubmitting ? (
				<>
					<Spinner className="size-3" />
					Generating...
				</>
			) : (
				"Generate Speech"
			)}
		</Button>
	);
}
