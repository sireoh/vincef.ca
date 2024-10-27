import { FC } from "react"

interface EducationAccordionProps {
    title: string;
    location: string;
    school: string;
    gradYear: string;
    description: string;
}

export const EducationAccordion: FC<EducationAccordionProps> = ({ title, location, school, gradYear, description }) => {
  return (
    <div className="collapse collapse-arrow border-2 border-neutral bg-base-200 text-neutral-content">
      <input type="checkbox" name="skills-accordion" />
      <div className="collapse-title flex flex-col gap-2">
        <div className="flex justify-between">
          <h3 className="text-base-content font-bold">{title}</h3>
          <h4 className="text-base-content">{location}</h4>
        </div>
        <div className="flex justify-between">
          <h5 className="text-base-content">{school}</h5>
          <h5 className="text-base-content">{gradYear}</h5>
        </div>
      </div>
      <div className="collapse-content border-t-2 border-neutral text-neutral-content">
        <div className="mt-4">
          {description}
        </div>
      </div>
    </div>
  )
}