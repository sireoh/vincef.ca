import { MetadataRoute } from "next"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Vincent Fung",
    short_name: "Vincent Fung",
    description: "Vincent Fung's Website",
    start_url: "/",
    scope: "/", // Define the scope for your web app
    display: "standalone",
    background_color: "#fff",
    theme_color: "#fff",
    icons: [
      {
        src: "/icons/icon-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icons/icon-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
      {
        src: "/favicon-v2.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  }
}
