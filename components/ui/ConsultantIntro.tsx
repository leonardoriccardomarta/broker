import Image from "next/image";
import { SITE, TEAM_MEMBERS } from "@/lib/constants";

type ConsultantIntroProps = {
  photoSize?: "sm" | "md";
  showName?: boolean;
  className?: string;
};

export function ConsultantIntro({
  photoSize = "sm",
  showName = true,
  className = "",
}: ConsultantIntroProps) {
  const imgSize = photoSize === "md" ? 44 : 36;

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div className="flex -space-x-2 overflow-hidden shrink-0">
        {TEAM_MEMBERS.map((m) => (
          <Image
            key={m.id}
            src={m.photo}
            alt={m.name}
            width={imgSize}
            height={imgSize}
            className="rounded-full object-cover ring-2 ring-white shadow-soft"
          />
        ))}
      </div>
      <div className="min-w-0">
        {showName ? (
          <p className="text-sm font-semibold text-midnight">{SITE.name}</p>
        ) : null}
        <p className="text-xs text-black/60 truncate">{SITE.legalLine}</p>
      </div>
    </div>
  );
}
