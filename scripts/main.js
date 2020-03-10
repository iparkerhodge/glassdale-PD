import { getCriminals } from "./criminals/CriminalProvider.js";
import { CriminalsList } from "./criminals/CriminalList.js";
import { getConvictions } from "./convictions/ConvictionProvider.js";
import { ConvictionSelect } from "./convictions/ConvictionsSelect.js";

getCriminals().then(CriminalsList)

getConvictions().then(ConvictionSelect)

