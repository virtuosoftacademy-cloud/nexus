import Image from "next/image";

/** One team/leadership member */
export type TeamMember = {
    id: string
    name: string
    role: string
    image: string
    bio: string
}

export function TeamCard({ image, bio, name, role }: TeamMember) {
    return (
        <div className="group flex items-center justify-center flex-col py-5">
            {/* Photo + overlay share one relative box so the panel always
                matches the image area exactly — no magic translate values */}
            <div className="relative">
                <Image
                    src={image}
                    alt={name}
                    width={413}
                    height={600}
                    className="max-w-5/5 md:max-w-full"
                />

                {/* Bio overlay — always in the DOM; fades + drifts in on
                    card hover. display can't animate; opacity can. */}
                <div className="absolute inset-0 rounded-2xl bg-linear-210 from-[#188182]/90 to-[#005657] p-8 md:p-15 text-white opacity-0 translate-y-4 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0 pointer-events-none group-hover:pointer-events-auto">
                    <p className="text-sm md:text-[1rem] font-extralight">{bio}</p>
                </div>
            </div>

            <h4 className="text-2xl md:text-4xl pt-4 font-semibold">
                {name}
            </h4>
            <p className="text-sm md:text-lg font-heading text-primary">
                {role}
            </p>
        </div>
    );
}