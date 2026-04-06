"use client";

import { formOptions } from "@tanstack/react-form";
import { z } from "zod";
import { useAppForm } from "@/hooks/use-app-form";

const ttsFormSchema = z.object({
	text: z.string().min(1, "Please enter some text"),
	voiceId: z.string().min(1, "Please select a voice"),
	temperature: z.number(),
	topP: z.number(),
	topK: z.number(),
	repetitionPenalty: z.number(),
});

export type TtsFormValues = z.infer<typeof ttsFormSchema>;

export const defaultTtsValues: TtsFormValues = {
	text: "",
	voiceId: "",
	temperature: 0.8,
	topP: 0.95,
	topK: 1000,
	repetitionPenalty: 1.2,
};

export const ttsFormOptions = formOptions({
	defaultValues: defaultTtsValues,
});

export function TextToSpeechForm({
	children,
	defaultValues,
}: {
	children: React.ReactNode;
	defaultValues?: TtsFormValues;
}) {
	const form = useAppForm({
		...ttsFormOptions,
		defaultValues: defaultValues ?? defaultTtsValues,
		validators: {
			onSubmit: ttsFormSchema,
		},
		onSubmit: async (values) => {
			await console.log(values);
		},
	});

	return <form.AppForm>{children}</form.AppForm>;
}
