import * as utils from "./utils/utils"
import { Data } from "./interfaces/Data"
import import_data from "./data/data.json"
const data: Data = import_data as unknown as Data;

export const Education = () => {
  return (
    <div className="flex flex-col gap-6 px-4 md:px-24">
      <h1 className="text-base-content">Education</h1>

      {utils.generateEducation(data.education)}
    </div>
  )
}