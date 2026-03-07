import { Headphones, ThumbsUp } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";

interface PageHeaderProps {
	className?: string;
	title: string;
}

export function PageHeader({ title, className }: PageHeaderProps) {
	return (
		<div
			className={cn(
				"flex items-center justify-between border-b px-4 py-4",
				className
			)}
		>
			<div className="flex items-center gap-2">
				<SidebarTrigger />
				<h1 className="font-semibold text-lg tracking-tight">{title}</h1>
			</div>
			<div className="flex items-center gap-3">
				<Button asChild size="sm" variant="outline">
					<Link href="mailto:ryan@ryanrhodes.io">
						<ThumbsUp />
						<span className="hidden lg:block">Feedback</span>
					</Link>
				</Button>
				<Button asChild size="sm" variant="outline">
					<Link href="mailto:ryan@ryanrhodes.io">
						<Headphones />
						<span className="hidden lg:block">Need help?</span>
					</Link>
				</Button>
			</div>
		</div>
	);
}
