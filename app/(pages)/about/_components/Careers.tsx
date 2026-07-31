import Info from "./ui/Info"

function Careers() {
    const careers = {
        title: 'Careers',
        subTitle: 'Building Professionals Who Value Structure',
        intro: "Nexus seeks professionals who recognise that advisory work requires discipline, discretion, and technical integrity.",
        listTitle: 'We value individuals who:',
        listItems:
            [
                "Demonstrate analytical precision",
                "Understand the importance of documentation",
                "Appreciate governance as a growth enabler",
                "Operate with professional restraint",
                "Value long term advisory relationships"
            ]
        ,
        outro:
            `We are not a high volume practice. We are a structured advisory firm.

Opportunities are offered selectively, with clear role definition and accountability.

Applications are reviewed confidentially and assessed based on professional competence and alignment with our advisory philosophy.
`
    }
    return (
        <div>
            <Info data={careers} />
            <div className="mx-auto max-w-6xl px-8 text-lg md:text-[1.75rem] space-y-3 md:space-y-6 font-heading text-foreground/80 pb-10 md:pb-20">
                <h3 className="font-bold">
                    Express Your Interest
                </h3>
                <p>
                    We do not operate open recruitment cycles. Where alignment exists, we engage directly.
                </p>
                <p>
                    If your background reflects the discipline and philosophy outlined above, please send your CV to <span className="underline"> careers@nexusadvisory.com </span>, using the subject line "Career Enquiry - [Your Name]", together with a short note on the nature of your interest.
                </p>
                <p>
                    All submissions are reviewed confidentially and considered against current and anticipated role requirements.
                </p>
            </div>
        </div>
    )
}

export default Careers