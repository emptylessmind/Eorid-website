import { ImageResponse } from "next/og";

export const alt = "Eorid — Your private digital world";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#ffffff",
          color: "#111111",
        }}
      >
        <div
          style={{
            fontSize: 32,
            fontWeight: 700,
            letterSpacing: "-1px",
            marginBottom: 28,
          }}
        >
          EORID
        </div>

        <div
          style={{
            fontSize: 76,
            fontWeight: 700,
            lineHeight: 1,
            letterSpacing: "-4px",
            maxWidth: 900,
          }}
        >
          Your private digital world.
        </div>

        <div
          style={{
            fontSize: 28,
            color: "#666666",
            marginTop: 32,
            maxWidth: 800,
          }}
        >
          Private social. Personal AI. Your digital life.
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
