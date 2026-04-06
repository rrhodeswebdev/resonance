"use client";

import { Coins } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
	COST_PER_UNIT,
	TEXT_MAX_LENGTH,
} from "@/features/text-to-speech/data/constants";

export function TextInputPanel() {
	const [text, setText] = useState("");
	const router = useRouter();

	const handleGenerate = () => {
		const trimmed = text.trim();

		if (!trimmed) {
			return;
		}

		router.push(`/text-to-speech?text=${encodeURIComponent(trimmed)}`);
	};

	return (
		<div className="rounded-[22px] bg-linear-185 from-15% from-[#ff8ee3] via-39% via-[#57d7e0] to-85% to-[#dbf1f2] p-0.5 shadow-[0_0_0_4px_white]">
			<div className="rounded-[20px] bg-[#f9f9f9] p-1">
				<div className="space-y-4 rounded-2xl bg-white p-4 drop-shadow-xs">
					<Textarea
						className="min-h-35 resize-none border-0 bg-transparent p-0 shadow-none focus-visible:ring-0"
						maxLength={TEXT_MAX_LENGTH}
						onChange={(e) => setText(e.target.value)}
						placeholder="Starting typing or paste your text here..."
						value={text}
					/>
					<div className="flex items-center justify-between">
						<Badge className="gap-1.5 border-dashed" variant="outline">
							<Coins className="size-3 text-chart-5" />
							<span className="text-xs">
								{text.length === 0 ? (
									"Start typing to estimate"
								) : (
									<>
										<span className="tabular-nums">
											${(text.length * COST_PER_UNIT).toFixed(4)}
										</span>{" "}
										estimated
									</>
								)}
							</span>
						</Badge>
						<span className="text-muted-foreground text-xs">
							{text.length.toLocaleString()} /{" "}
							{TEXT_MAX_LENGTH.toLocaleString()} characters
						</span>
					</div>
				</div>
				<div className="flex items-center justify-end p-3">
					<Button
						className="w-full lg:w-auto"
						disabled={!text.trim()}
						onClick={handleGenerate}
						size="sm"
					>
						Generate Speech
					</Button>
				</div>
			</div>
		</div>
	);
}
