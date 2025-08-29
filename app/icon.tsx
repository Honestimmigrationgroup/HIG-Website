import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Honest Immigration Group Logo";
export const size = {
  width: 32,
  height: 32,
};
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <img
        src={"/logo.png"}
        width={32}
        height={32}
        alt="Honest Immigration Group Logo"
        style={{ borderRadius: "8px" }}
      />
    ),
    size
  );
}
