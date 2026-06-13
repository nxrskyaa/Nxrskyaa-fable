import Image from "next/image";

/**
 * Brand lockup — places the NXR mascot inside a clean dark rounded container
 * so the logo's native black background blends naturally with the UI instead
 * of looking pasted on. Used in navbar, dashboard, footer, etc.
 */
export function BrandMark({
  size = 36,
  rounded = "rounded-[11px]",
  className = "",
}: {
  size?: number;
  rounded?: string;
  className?: string;
}) {
  return (
    <span
      className={`relative inline-flex shrink-0 items-center justify-center overflow-hidden bg-ink ring-1 ring-black/10 ${rounded} ${className}`}
      style={{ width: size, height: size }}
    >
      <Image
        src="/nxr-logo.png"
        alt="NXRSkyaa Labs"
        width={size}
        height={size}
        className="h-full w-full object-cover"
        priority
      />
    </span>
  );
}

export function BrandLockup({
  size = 34,
  textClass = "text-[17px]",
  light = false,
}: {
  size?: number;
  textClass?: string;
  light?: boolean;
}) {
  return (
    <span className="inline-flex items-center gap-2.5">
      <BrandMark size={size} />
      <span
        className={`font-semibold tracking-[-0.02em] ${textClass} ${
          light ? "text-paper" : "text-ink"
        }`}
      >
        NXRSkyaa&nbsp;Labs
      </span>
    </span>
  );
}
