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
        src: "/favicon.png",
        sizes: "any",
        type: "image/png",
      },
    ],
  }
}
