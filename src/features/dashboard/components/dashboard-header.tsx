"use client";

import { useUser } from "@clerk/nextjs";
import { Headphones, ThumbsUp } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function DashboardHeader() {
	const { user, isLoaded } = useUser();

	return (
		<div className="flex items-start justify-between">
			<div className="space-y-1">
				<p className="text-muted-foreground text-sm">Nice to see you</p>
				<h1 className="font-semibold text-2xl tracking-tight lg:text-3xl">
					{isLoaded ? (user?.fullName ?? user?.firstName ?? "there") : "..."}
				</h1>
			</div>
			<div className="hidden items-center gap-3 lg:flex">
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
