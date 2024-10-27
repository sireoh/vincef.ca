// Define the interfaces in your TypeScript file
type Array = { [key: string]: string }; // Each social object can have any string key with a string value
type Skills = {
    title : string;
    skills : [ string ];
    description : string;
}
type Projects = {
    title: string;
    tagline: string;
    image: string;
    image_sm: string;
    link: string;
    tags: [ string ];
    date: string
    description: string;
}

interface Data {
    hero: {
        tagline: string;
        bio: string;
        aboutme: string;
    };
    socials: Array[]; // An array of social media objects
    skills: Skills[];
    education: Array[];
    projects: Projects[];
}

export type { 
    Data,
    Projects
}