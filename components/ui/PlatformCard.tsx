"use client";

import { PlatForm} from "@/app/_constant";

interface PlatformCardProps {
  platform: PlatForm;
}

export default function PlatformCard({ platform }: PlatformCardProps) {
  const { name, logoUrl } = platform;

  return (
    <div className="flex flex-col items-center justify-center gap-4 bg-background border border-border p-8 hover:border-primary/40 transition-colors duration-200">
      <img
        src={logoUrl}
        alt={name}
        className="h-12 w-auto object-contain"
        onError={(e) => {
          // fallback to text if logo fails to load
          (e.target as HTMLImageElement).style.display = "none";
        }}
      />
      <span className="text-sm text-foreground/70 font-medium">{name}</span>
    </div>
  );
}