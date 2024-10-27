/* eslint-disable react/no-unknown-property */
"use client"

import { FC, JSX, MouseEventHandler, useRef } from "react"
import { Particles } from "../atoms/Particle"
import * as utils from "./utils/utils"
import { Data } from "./interfaces/Data"
import import_data from "./data/data.json"
const data: Data = import_data as unknown as Data;

export const Hero: FC = () => {
  const mouse = useRef<[number, number]>([0, 0])
  const onMouseMove: MouseEventHandler<HTMLDivElement> = (e) => {
    mouse.current = [e.clientX - window.innerWidth / 2, e.clientY - window.innerHeight / 2]
  }

  return (
    <div onMouseMove={onMouseMove}>
      <Particles color="#AAA" size={0.5} sizeVariance={2} speed={0.3} particleCount={30} />

      <div className="mx-auto flex max-w-7xl flex-col items-center justify-evenly gap-16 px-4 md:px-16 lg:mt-32 lg:flex-row lg:items-start">
        <div className="mt-40 flex flex-col gap-16 lg:m-0 lg:w-1/2">
          <div className="gif flex justify-center">
            <img width="300" height="259" alt="RaccoonSpaceGif" src="/media/space.webp"/>
          </div>
          <div>
            <h2 className="text-base-content">Hello there,</h2>
            <h1 className="mb-4 text-base-content">I'm&nbsp;<b className="text-primary">Vincent Fung</b></h1>

            <h3 className="text-neutral-content">{data.hero.tagline}</h3>
            {utils.generateParagraphs(data.hero.bio)}
          </div>
          <div>
            <a target='_blank' href='files/resume.pdf' className="btn btn-outline btn-primary rounded-none">Resume</a>
            <footer className="footer mt-5">
              <nav>
                <div className="grid grid-flow-col gap-4 text-base-content">
                  {utils.generateSocials(data.socials)}
                </div>
              </nav>
            </footer>
          </div>
        </div>

        <div className="flex flex-col gap-6 lg:w-1/2">
          <div>
            <h2 className="text-base-content">About Me</h2>
            {utils.generateParagraphs(data.hero.aboutme)}
          </div>

          <section className="mt-8 flex flex-col gap-4">
            <h2 className="text-base-content">Skills</h2>
            {utils.generateSkills(data.skills)}
          </section>
        </div>
      </div>
    </div>
  )
}