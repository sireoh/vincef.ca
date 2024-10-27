import { Hero } from "@/components/sections/Hero"
import { GlowingCursor } from "@/components/atoms/GlowingCursor"
import React from "react"
import { Navbar } from "@/components/sections/Navbar"
import { Projects } from "@/components/sections/Projects"
import { Education } from "@/components/sections/Education"

export default function Home() {
  return (
    <>
      <Navbar />
      <GlowingCursor />
      <main className="flex min-h-screen flex-col gap-16 bg-base-100">
        <Hero />
        <Education />
        <Projects />
        <footer className="footer footer-center z-10 bg-base-200 p-10 text-base-content">
          <aside className="max-w-lg"><p>© 2024 <span className="font-bold">Vincent Fung.&nbsp;</span>All Rights Reserved.</p></aside>
        </footer>
      </main>
    </>
  )
}
