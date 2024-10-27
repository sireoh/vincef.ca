import { ImageResponse } from "next/og"
 
// Route segment config
export const runtime = "edge"
 
// Image metadata
export const alt = "Vincent Fung"
export const size = {
  width: 1200,
  height: 630,
}
 
export const contentType = "image/png"
 
// Image generation
export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundImage: "url(https://res.cloudinary.com/dodz2eoby/image/upload/v1730068348/vincef.ca/firefox_eohTPSE5IbN_pgjkuh.png)",
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