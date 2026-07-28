// ============================================================================
// File: app/(pages)/privacy-policy/page.tsx
// Purpose: Privacy policy for Nexus Advisory. UK GDPR / Data Protection Act
//          2018 / PECR framework. Static content — no DB, safe to prerender.
//
// ⚠ BEFORE PUBLISHING:
//   1. Replace every [PLACEHOLDER] with real details.
//   2. Have it reviewed by someone qualified — this is a legal document and
//      a structured template, not legal advice.
//   3. Confirm the third-party processors listed match what you actually use
//      (hosting, analytics, email, cloud storage).
// ============================================================================
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Privacy Policy | Nexus Advisory",
    description:
        "How Nexus Advisory collects, uses, and protects personal data, and your rights under UK data protection law.",
};

// Last updated — bump when the policy changes.
const LAST_UPDATED = "28 July 2026";

export default function PrivacyPolicyPage() {
    return (
        <main className="mx-auto max-w-3xl px-6 py-32 sm:px-8 md:py-48 min-h-screen">
            <header className="mb-12">
                <h1 className="text-4xl font-semibold text-foreground md:text-5xl">
                    Privacy Policy
                </h1>
                {/* <p className="mt-4 text-sm text-foreground/60">
                    Last updated: {LAST_UPDATED}
                </p> */}
            </header>

            <div className="space-y-10 font-serif text-base leading-relaxed text-foreground/80">

                {/* ── Intro ── */}
                <section className="space-y-4">
                    <p>
                        This privacy policy explains how Nexus Advisory & Services (&quot;Nexus
                        Advisory&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;)
                        collects, uses, stores, and protects your personal data when you
                        use our website, engage our accounting and advisory services, or
                        otherwise interact with us.
                    </p>
                    <p>
                        We are committed to protecting your privacy and handling your data
                        in line with the UK General Data Protection Regulation (UK GDPR),
                        the Data Protection Act 2018, and the Privacy and Electronic
                        Communications Regulations (PECR).
                    </p>
                </section>

                {/* ── 1. Who we are ── */}
                <Section title="1. Who we are">
                    <p>
                        Nexus Advisory & Services is a [company type — e.g. limited company
                        registered in England and Wales], company number [COMPANY NUMBER],
                        with its registered office at [REGISTERED ADDRESS].
                    </p>
                    <p>
                        We are the data controller responsible for your personal data. We
                        are registered with the Information Commissioner&apos;s Office (ICO)
                        under registration number [ICO REGISTRATION NUMBER].
                    </p>
                    <p>
                        For any questions about this policy or your data, contact us at{" "}
                        <a href="mailto:info@nexusadvisory.uk" className="text-primary underline">
                            info@nexusadvisory.uk
                        </a>{" "}
                        or by post at the address above.
                    </p>
                </Section>

                {/* ── 2. Data we collect ── */}
                <Section title="2. Personal data we collect">
                    <p>Depending on how you interact with us, we may collect:</p>
                    <ul className="list-disc space-y-2 pl-6">
                        <li>
                            <strong className="font-semibold text-foreground">
                                Identity and contact data:
                            </strong>{" "}
                            name, job title, company name, email address, postal address,
                            and telephone number.
                        </li>
                        <li>
                            <strong className="font-semibold text-foreground">
                                Client and financial data:
                            </strong>{" "}
                            where you engage our services, information necessary to deliver
                            accounting and advisory work — for example accounting records,
                            tax information, payroll details, and related documentation for
                            you or your business.
                        </li>
                        <li>
                            <strong className="font-semibold text-foreground">
                                Enquiry and correspondence data:
                            </strong>{" "}
                            messages you send us through contact forms, email, or the
                            newsletter signup, and our correspondence with you.
                        </li>
                        <li>
                            <strong className="font-semibold text-foreground">
                                Technical and usage data:
                            </strong>{" "}
                            IP address, browser type, device information, and how you use
                            our website, collected via cookies and similar technologies
                            (see section 8).
                        </li>
                    </ul>
                    <p>
                        Where we act for a business client, we may process personal data
                        about that client&apos;s employees, contractors, customers, or
                        suppliers as part of delivering our services. In those cases the
                        client is typically the data controller and we act as a data
                        processor on their instructions.
                    </p>
                </Section>

                {/* ── 3. How we use it / lawful bases ── */}
                <Section title="3. How and why we use your data">
                    <p>
                        We only use your personal data where the law allows. The lawful
                        bases we rely on are:
                    </p>
                    <ul className="list-disc space-y-2 pl-6">
                        <li>
                            <strong className="font-semibold text-foreground">Contract:</strong>{" "}
                            to provide the services you have engaged us for and to manage
                            our relationship with you.
                        </li>
                        <li>
                            <strong className="font-semibold text-foreground">
                                Legal obligation:
                            </strong>{" "}
                            to comply with our legal and regulatory duties, including
                            anti-money-laundering checks, tax reporting, and record-keeping
                            requirements.
                        </li>
                        <li>
                            <strong className="font-semibold text-foreground">
                                Legitimate interests:
                            </strong>{" "}
                            to run and improve our business, respond to enquiries, and keep
                            our website secure — provided your rights do not override those
                            interests.
                        </li>
                        <li>
                            <strong className="font-semibold text-foreground">Consent:</strong>{" "}
                            for optional activities such as sending you our newsletter or
                            marketing updates, which you can withdraw at any time.
                        </li>
                    </ul>
                </Section>

                {/* ── 4. Sharing ── */}
                <Section title="4. Who we share your data with">
                    <p>We do not sell your personal data. We may share it with:</p>
                    <ul className="list-disc space-y-2 pl-6">
                        <li>
                            Service providers who help us operate — for example our website
                            hosting provider, cloud storage, email, and analytics providers
                            — who process data on our behalf under written agreements.
                        </li>
                        <li>
                            Professional advisers, regulators, and authorities such as HM
                            Revenue &amp; Customs, Companies House, or our professional body,
                            where required to deliver our services or comply with the law.
                        </li>
                        <li>
                            Third parties in connection with a business reorganisation, sale,
                            or transfer, subject to appropriate confidentiality protections.
                        </li>
                    </ul>
                </Section>

                {/* ── 5. Retention ── */}
                <Section title="5. How long we keep your data">
                    <p>
                        We keep personal data only for as long as necessary for the purposes
                        we collected it, including to satisfy legal, accounting, or reporting
                        requirements. For client engagements, we generally retain records for
                        at least [RETENTION PERIOD — e.g. six] years after the relationship
                        ends, in line with tax and regulatory obligations. Newsletter data is
                        kept until you unsubscribe.
                    </p>
                </Section>

                {/* ── 6. Security ── */}
                <Section title="6. How we protect your data">
                    <p>
                        We use appropriate technical and organisational measures to protect
                        your personal data against unauthorised access, loss, or misuse,
                        including access controls, encryption in transit, and secure hosting.
                        No transmission over the internet is completely secure, but we work
                        to protect your data and to respond appropriately to any suspected
                        breach.
                    </p>
                </Section>

                {/* ── 7. International transfers ── */}
                <Section title="7. International transfers">
                    <p>
                        Some of our service providers may process data outside the UK. Where
                        that happens, we ensure an appropriate safeguard is in place — such
                        as an adequacy decision or the UK International Data Transfer
                        Agreement — so your data receives an equivalent level of protection.
                    </p>
                </Section>

                {/* ── 8. Cookies ── */}
                <Section title="8. Cookies">
                    <p>
                        Our website uses cookies and similar technologies to function and to
                        help us understand how the site is used. Essential cookies are
                        necessary for the site to work; non-essential cookies (such as
                        analytics) are only set with your consent. You can manage your
                        preferences through your browser settings [and our cookie banner, if
                        applicable]. For more detail, see our [Cookie Policy — link, if you
                        have a separate one].
                    </p>
                </Section>

                {/* ── 9. Your rights ── */}
                <Section title="9. Your rights">
                    <p>Under UK data protection law you have the right to:</p>
                    <ul className="list-disc space-y-2 pl-6">
                        <li>access the personal data we hold about you;</li>
                        <li>ask us to correct inaccurate or incomplete data;</li>
                        <li>ask us to delete your data in certain circumstances;</li>
                        <li>object to or restrict how we process your data;</li>
                        <li>request the transfer of your data (data portability); and</li>
                        <li>withdraw consent at any time where we rely on it.</li>
                    </ul>
                    <p>
                        To exercise any of these rights, contact us at{" "}
                        <a href="mailto:info@nexusadvisory.uk" className="text-primary underline">
                            info@nexusadvisory.uk
                        </a>
                        . We will respond within one month.
                    </p>
                </Section>

                {/* ── 10. Complaints ── */}
                <Section title="10. Complaints">
                    <p>
                        If you have concerns about how we handle your data, please contact us
                        first so we can try to resolve them. You also have the right to
                        complain to the Information Commissioner&apos;s Office (ICO), the UK
                        supervisory authority, at{" "}
                        <a
                            href="https://ico.org.uk"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary underline"
                        >
                            ico.org.uk
                        </a>
                        .
                    </p>
                </Section>

                {/* ── 11. Changes ── */}
                <Section title="11. Changes to this policy">
                    <p>
                        We may update this policy from time to time. Any changes will be
                        posted on this page with a revised &quot;last updated&quot; date. We
                        encourage you to review it periodically.
                    </p>
                </Section>
            </div>
        </main>
    );
}

// Small section wrapper — heading + spaced content.
function Section({ title, children }: { title: string; children: React.ReactNode }) {
    return (
        <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">{title}</h2>
            {children}
        </section>
    );
}