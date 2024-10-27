import { ImageResponse } from "next/og"

// Route segment config
export const runtime = "edge"

// Image metadata
export const size = {
  width: 32,
  height: 32,
}
export const contentType = "image/png"

// Image generation
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundImage: "url(https://res.cloudinary.com/dodz2eoby/image/upload/v1730065102/vincef.ca/favicon.png_kdrbhx.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
    ),
    {
      ...size,
    }
  )
}