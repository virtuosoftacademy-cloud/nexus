// Plain module, deliberately NOT "use server": such a file may only export
// async functions, so these constants cannot live beside the action. Both the
// client form and the server action import them, which is what keeps the
// dropdown and its server-side whitelist from drifting apart.
import { serviceItems } from "@/app/_constant";

export const GENERAL_ENQUIRY = "General enquiry";

/** The dropdown's allowed values: the real service pages, plus a catch-all. */
export const INTEREST_OPTIONS = [
    ...serviceItems.map((s) => s.title),
    GENERAL_ENQUIRY,
];
