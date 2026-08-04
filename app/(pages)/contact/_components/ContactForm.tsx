"use client";

import { useActionState, useEffect } from "react";
import Image from "next/image";
import { sendContactMessage, type ContactState } from "@/app/api/contact/actions";
import { INTEREST_OPTIONS } from "@/app/api/contact/options";
import { showSimpleSuccess, showSimpleError } from "@/lib/toast-notifications";
import { Button } from "@/components/ui/button";

const initialState: ContactState = {};

// Shared by every control so the fields read as one block, matching the
// muted panel look of the card in the design.
const fieldClass =
    "w-full border-0 bg-primary/5 px-5 py-4 font-heading text-base text-foreground " +
    "placeholder:text-foreground/35 focus:outline-none focus:ring-1 focus:ring-primary";

function FieldError({ message }: { message?: string }) {
    if (!message) return null;
    return <p className="mt-1 text-sm text-red-600">{message}</p>;
}

export default function ContactForm() {
    const [state, formAction, isPending] = useActionState(
        sendContactMessage,
        initialState
    );

    useEffect(() => {
        if (state.success) showSimpleSuccess("Message sent", state.success);
        if (state.error) showSimpleError("Could not send", state.error);
    }, [state]);

    const errors = state.fieldErrors ?? {};
    // React resets an uncontrolled form once its action resolves. Pointing the
    // defaults at a rejected submission keeps the visitor's text — losing a
    // long description to a typo'd email would be the worst outcome here.
    // After a success we deliberately fall back to blank for the next enquiry.
    const values = state.success ? undefined : state.values;

    return (
        <section id="contact-form" className="bg-primary px-6 py-16 sm:px-8 lg:px-16 md:py-24">
            <div className="mx-auto max-w-[100rem]">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                    {/* The form wraps the card AND the button: the button sits
                        outside the white panel in the design, but still has to
                        submit the fields inside it. */}
                    <form action={formAction} className="z-20">
                        {/* ── Form card ── */}
                        <div className="bg-background px-6 py-10 shadow-lg sm:px-12 sm:py-14">
                            <h4 className="text-3xl font-semibold text-foreground md:text-4xl">
                                Let&rsquo;s Connect,{" "}
                                <span className="text-primary">We&rsquo;re Here to Help!</span>
                            </h4>
                            <p className="mt-3 font-heading text-base text-foreground/70 md:text-lg">
                                Have a query or need assistance? Our team is just a message away!
                            </p>

                            <div className="mt-8 space-y-4">
                                {/* Honeypot — hidden from people, irresistible to bots. */}
                                <input
                                    type="text"
                                    name="website"
                                    tabIndex={-1}
                                    autoComplete="off"
                                    aria-hidden="true"
                                    className="hidden"
                                />

                                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                    <div>
                                        <label htmlFor="name" className="sr-only">Name</label>
                                        <input
                                            id="name"
                                            name="name"
                                            type="text"
                                            required
                                            placeholder="Name"
                                            defaultValue={values?.name}
                                            aria-invalid={Boolean(errors.name)}
                                            className={fieldClass}
                                        />
                                        <FieldError message={errors.name} />
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="sr-only">Email</label>
                                        <input
                                            id="email"
                                            name="email"
                                            type="email"
                                            required
                                            placeholder="Email"
                                            defaultValue={values?.email}
                                            aria-invalid={Boolean(errors.email)}
                                            className={fieldClass}
                                        />
                                        <FieldError message={errors.email} />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="interestedIn" className="sr-only">
                                        Interested in
                                    </label>
                                    <select
                                        id="interestedIn"
                                        name="interestedIn"
                                        required
                                        defaultValue={values?.interestedIn ?? ""}
                                        aria-invalid={Boolean(errors.interestedIn)}
                                        className={`${fieldClass} appearance-none bg-[length:0.75rem] bg-[right_1.5rem_center] bg-no-repeat pr-12`}
                                        style={{
                                            // Inline so the caret inherits the field colour without
                                            // shipping an extra asset.
                                            backgroundImage:
                                                "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 10 6'><path d='M0 0h10L5 6z' fill='%23999'/></svg>\")",
                                        }}
                                    >
                                        <option value="" disabled>
                                            Interested in
                                        </option>
                                        {INTEREST_OPTIONS.map((option) => (
                                            <option key={option} value={option}>
                                                {option}
                                            </option>
                                        ))}
                                    </select>
                                    <FieldError message={errors.interestedIn} />
                                </div>

                                <div>
                                    <label htmlFor="description" className="sr-only">
                                        Description
                                    </label>
                                    <textarea
                                        id="description"
                                        name="description"
                                        rows={6}
                                        required
                                        placeholder="Description"
                                        defaultValue={values?.description}
                                        aria-invalid={Boolean(errors.description)}
                                        className={`${fieldClass} resize-y`}
                                    />
                                    <FieldError message={errors.description} />
                                </div>
                            </div>
                        </div>

                        {/* Sits below the card, not inside it — left aligned
                            against the panel edge as in the design. */}
                        <Button
                            variant={"secondary"}
                            type="submit"
                            disabled={isPending}
                            className="mt-8"
                        >
                            {isPending ? "Sending…" : "Request a structured discussion"}
                        </Button>
                    </form>

                    {/* ── Image ── */}
                    <div className="hidden xl:block relative mt-8 h-32 w-full z-10 md:mt-0 md:h-auto md:self-stretch md:pb-0">
                        <div className="relative h-12 w-full md:absolute md:inset-0 md:h-[calc(100%+0rem)] aspect-2/3 md:aspect-auto xl:min-h-100 overflow-hidden">
                            <Image
                                src={"/assets/services/servicePagesCta.png"}
                                alt={"Contact Page"}
                                fill
                                sizes="(max-width: 1220px) 100vw, 75vw"
                                className="object-cover hover:scale-110 duration-500 transition"
                            />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
