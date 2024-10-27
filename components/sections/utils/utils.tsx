import { JSX } from "react";
import { svgs } from "./svgs"
import Image from "next/image"
import { Project } from "../../blocks/Project"
import { Accordion } from "../../blocks/Accordion"
import { EducationAccordion } from "../../blocks/EducationAccordian"
import { Projects } from "../interfaces/Data";

function generateParagraphs(str: string) {
    const textArray = str.split("\n");
    const paragraphs: JSX.Element[] = [];

    paragraphs.push(<br/>);

    textArray.forEach((paragraph, index) => {
        paragraphs.push(<p key={index} className="text-neutral-content">{paragraph}</p>);
        // Only add a <br> if it's not the last paragraph
        if (index < textArray.length - 1) {
            paragraphs.push(<br key={`br-${index}`}/>);
        }
    });

    // Return a fragment or a div instead of wrapping in a <p>
    return <div>{paragraphs}</div>;
}

function getPlatformName(str : string) {
    if (!str.includes(".")) {
        return str;
    }

    const name = str.split(".")[0];
    return name;
}

function getTLD(str : string) {
    if (!str.includes(".")) {
        return "com/";
    }

    const tld = str.split(".")[1];
    return tld + "/";
}

function generateSocials(arr: { [key: string]: string; }[]) {
    const elements: JSX.Element[] = [];

    arr.forEach((object, index) => {
        const key = Object.keys(object)[0] as string;
        const value = object[key];

        elements.push(
            <a key={index} href={"https://" + getPlatformName(key) + "." + getTLD(key) + value} target="_blank" rel="noopener noreferrer">
                {svgs[key] || null}
            </a>
        );
    });

    return (
        <>
            {elements}
        </>
    );
}


function generateSkills(arr: { title: string; skills: string[]; description: string; }[]) {
    const elements: JSX.Element[] = [];

    arr.forEach((item, index) => {
        elements.push(
            <Accordion key={index} title={item.title} skills={item.skills}>
                <p>{item.description}</p>
            </Accordion>
        )
    });

    return (
        <>
            {elements}
        </>
    );
}

function generateEducation(arr: { [key: string]: string; }[]) {
    const elements : JSX.Element[] = [];
    arr.forEach((item, index) => {
        elements.push(
            <EducationAccordion
                key={index}
                title={item.title}
                location={item.location}
                school={item.school}
                gradYear={item.gradYear}
                description={item.description}
            >
            </EducationAccordion>
        )
    });

    return (
        <>
            {elements}
        </>
    );
}

function generateProjects(arr: Projects[]) {
    const elements : JSX.Element[] = [];
    const width : number = 1280;
    const height : number = width;

    arr.forEach((item, index) => {
        elements.push(
            <div className="relative flex flex-col items-center lg:flex-row" key={index}>
                <div className="hidden lg:block lg:w-3/4">
                <div className="right-20 hidden border border-primary lg:block">
                <Image src={item.image} alt={item.title} width={width} height={height}/>
                </div>
                </div>
                <div className="right-0 w-full lg:absolute lg:w-1/3">
                <a target="_blank" href={item.link} rel="noreferrer">
                    <Project title={item.title} subheading={item.tagline} tags={item.tags}>
                    <p>{item.description}</p>
                    <Image src={item.image_sm} alt={item.title.toLowerCase().trim()} width={width} height={height}/>
                    </Project>
                </a>
                </div>
            </div>
        )
    });

    return (
        <>
            {elements}
        </>
    );
}

export { 
    generateParagraphs,
    generateSocials,
    generateSkills,
    generateEducation,
    generateProjects
};
