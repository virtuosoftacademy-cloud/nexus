import React from 'react';
import { Clock, ShieldCheck, Sparkles, CheckCircle2 } from "lucide-react";

function Pricing() {
    const benefits = [
        {
            icon: Clock,
            title: "Save 15+ hours a week",
            desc: "Automate the busywork — leases, payments, reminders — and focus on growing your portfolio.",
        },
        {
            icon: ShieldCheck,
            title: "Secure & compliant",
            desc: "SOC 2 Type II certified with end-to-end encryption. Your data and your tenants' data stay safe.",
        },
        {
            icon: Sparkles,
            title: "Loved by tenants",
            desc: "A polished tenant portal that makes paying rent and submitting requests effortless.",
        },
    ];

    const packages = [
        {
            name: "Unlimited (Regular Plan)",
            price: "$9",
            unit: "per unit / month",
            features: [
                "Property Listings",
                "Tenant Screening",
                "Leasing",
                "Rent Collection",
                "Maintenance"
            ],
            isPopular: false,
            buttonVariant: "outline"
        },
        {
            name: "Unlimited (Premium Plan)",
            price: "$20",
            unit: "per unit / month",
            features: [
                "Property Listings",
                "Tenant Screening",
                "Leasing",
                "Rent Collection",
                "Maintenance",
                "Compliance",
                "Tenant Portal",
                "Accounting"
            ],
            isPopular: true,
            buttonVariant: "default"
        }
    ];

    return (
        <>
            {/* Benefits Section */}
            <section id="benefits" className="py-20 lg:py-28 bg-muted/30">
                <div className="max-w-7xl mx-auto px-6 md:px-0">
                    <div className="max-w-2xl mx-auto text-center mb-16">
                        <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">Benefits</p>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
                            Built to make a real difference
                        </h2>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        {benefits.map(({ icon: Icon, title, desc }) => (
                            <div key={title} className="p-8 rounded-2xl bg-card border border-border shadow-soft text-center hover:shadow-elegant transition-all duration-300">
                                <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary mb-5">
                                    <Icon className="w-7 h-7 text-primary-foreground" />
                                </div>
                                <h3 className="font-semibold text-xl mb-3">{title}</h3>
                                <p className="text-muted-foreground leading-relaxed">{desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Pricing Packages Section */}
            <section id="pricing" className="py-20 lg:py-28">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="max-w-2xl mx-auto text-center mb-16">
                        <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">Packages</p>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
                            Packages For Property Management
                        </h2>
                        <p className="text-muted-foreground text-lg">
                            Choose the perfect plan for your portfolio size and needs
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        {packages.map((pkg) => (
                            <div
                                key={pkg.name}
                                className={`relative rounded-2xl bg-card border transition-all duration-300 hover:shadow-elegant ${
                                    pkg.isPopular
                                        ? 'border-primary shadow-lg scale-105 md:scale-105'
                                        : 'border-border shadow-soft'
                                }`}
                            >
                                {pkg.isPopular && (
                                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                                        <span className="bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full">
                                            Most Popular
                                        </span>
                                    </div>
                                )}
                                <div className="p-8">
                                    <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
                                    <div className="mb-6">
                                        <span className="text-4xl font-extrabold">{pkg.price}</span>
                                        <span className="text-muted-foreground"> {pkg.unit}</span>
                                    </div>

                                    <button
                                        className={`w-full py-3 px-4 rounded-xl font-semibold transition-all duration-200 mb-8 ${
                                            pkg.isPopular
                                                ? 'bg-primary text-primary-foreground hover:bg-primary/90 shadow-md'
                                                : 'border border-input bg-background hover:bg-muted/50'
                                        }`}
                                    >
                                        Get Started
                                    </button>

                                    <div className="space-y-3">
                                        {pkg.features.map((feature) => (
                                            <div key={feature} className="flex items-center gap-3">
                                                <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                                                <span className="text-muted-foreground">{feature}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <p className="text-center text-muted-foreground text-sm mt-12">
                        All plans include access to our core platform. No hidden fees.
                    </p>
                </div>
            </section>
        </>
    );
}

export default Pricing;