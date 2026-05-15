'use client'

export default function Job() {
    return (
        <>
            <div className="relative mt-30 max-w-7xl lg:mt-50 mx-auto px-10">
                <div className="flex justify-center items-center flex-col mt-20 md:mt-50 text-center">
                    <div className="flex flex-col">
                        <h3 className={`font-light capitalize text-4xl md:text-5xl lg:text-5xl -mt-4 md:-mt-6`}>Land Your</h3>
                        <h3 className={`text-4xl md:text-5xl capitalize font-black`}>
                            <strong>
                                <em>
                                    Dream Job Here!
                                </em>
                            </strong>
                        </h3>
                        {/* <div className="bg-chart-1 rounded-full size-2 lg:size-3 relative bottom-3 md:bottom-4 left-[87%]" />
                        <div className="flex justify-center pb-10">
                            <p className="text-sm lg:text-lg text-gray-400/80 font-light max-w-3xl">Our squad is all about turning ideas into impact. Every project, every challenge, every success is a team win.</p>
                        </div> */}
                        <div>

                        </div>
                    </div>
                    <div className="flex justify-center items-center flex-col gap-8 transform transition-all">
                        <div
                            className={` mt-14
                                        group relative max-w-2xl rounded-xl bg-white py-4 px-8 lg:px-16
                                    shadow-[0_10px_25px_rgba(0,0,0,0.05)]
                                translate-0
                                    overflow-hidden`}                        >
                            {/* Gradient border – modern, reliable method */}
                            <div
                                className="
                                    pointer-events-none absolute inset-0 rounded-[15px]
                                    bg-linear-to-b from-primary to-white p-0.5 -z-10
                                  "
                            >
                                <div className="h-full w-full rounded-[13px] bg-white" />
                            </div>
                            {/* Content */}
                            <div className="relative z-10 space-y-1 sm:space-y-2">

                                {/* Heading */}
                                <h4 className={`font-bold lg:text-3xl`}>
                                    <strong>
                                        <em>
                                            UI/UX Designer
                                        </em>
                                    </strong>
                                </h4>

                                {/* Paragraph */}
                                <h4 className="lg:text-[18px] text-gray-500 font-light">
                                    5-10 yr Experience / On Office / Full-time
                                </h4>
                            </div>
                        </div>
                        <div className="flex gap-4 justify-center items-center">
                            <div className="w-64 bg-gray-300 h-[1] rounded-full" />
                            <div className="font-medium lg:text-lg text-gray-400">
                                <h4>Or</h4>
                            </div>
                            <div className="w-64 bg-gray-300 h-[1] rounded-full" />
                        </div>

                        <div
                            className={`group relative max-w-2xl rounded-xl bg-white py-4 px-18 lg:px-16
                                    shadow-[0_10px_25px_rgba(0,0,0,0.05)]
                                translate-0
                                    overflow-hidden`}                        >
                            {/* Gradient border – modern, reliable method */}
                            <div
                                className="
                                    pointer-events-none absolute inset-0 rounded-[15px]
                                    bg-linear-to-b from-primary to-white p-0.5 -z-10
                                  "
                            >
                                <div className="h-full w-full rounded-[13px] bg-white" />
                            </div>
                            {/* Content */}
                            <div className="relative z-10 space-y-1 sm:space-y-2">

                                {/* Heading */}
                                <h4 className={`font-bold lg:text-2xl -mb-1`}>
                                    <strong>
                                        <em>
                                            Didn't find your domain or  job?
                                        </em>
                                    </strong>
                                </h4>

                                {/* Paragraph */}
                                <p className="lg:text-2xl text-gray-500 font-light -mb-1">
                                    Don't worry you can still
                                </p>
                                <h4 className={`font-bold lg:text-2xl`}>
                                    <strong>
                                        <em>
                                            Drop us a CV.
                                        </em>
                                    </strong>
                                </h4>
                            </div>
                        </div>
                    </div>
                    <div>

                    </div>
                </div>

            </div>
        </>
    )
}
