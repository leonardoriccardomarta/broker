import Image from "next/image";
import { SITE } from "@/lib/constants";

type ConsultantIntroProps = {
  photoSize?: "sm" | "md";
  showName?: boolean;
  className?: string;
};

const PHOTO_SIZES = {
  sm: { box: "h-14 w-14", image: 56 },
  md: { box: "h-20 w-20", image: 80 },
} as const;

export function ConsultantIntro({
  photoSize = "sm",
  showName = true,
  className = "",
}: ConsultantIntroProps) {
  const size = PHOTO_SIZES[photoSize];

  return (
    <div className={`flex items-start gap-3 ${className}`}>
      <Image
        src="/images/photos/filippo.jpeg"
        alt={SITE.name}
        width={size.image}
        height={size.image}
        className={`${size.box} shrink-0 rounded-full object-cover ring-2 ring-white shadow-soft`}
      />
      <div className="min-w-0">
        {showName ? (
          <p className="text-sm font-semibold text-midnight">{SITE.name}</p>
        ) : null}
        <p
          className={`leading-snug text-black/60 ${
            showName ? "mt-0.5 text-xs" : "text-sm"
          }`}
        >
          {SITE.legalLine}
        </p>
      </div>
    </div>
  );
}
