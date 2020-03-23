import { getCriminals } from "./criminals/CriminalProvider.js";
import { CriminalsList } from "./criminals/CriminalList.js";
import { getConvictions } from "./convictions/ConvictionProvider.js";
import { ConvictionSelect } from "./convictions/ConvictionsSelect.js";
import { getNotes } from "./notes/noteDataProvider.js";
import NoteForm from "./notes/NoteForm.js";
import { NoteList } from "./notes/NoteList.js";
import { initializeDetailButtonEvents } from "./criminals/dialog.js";
import { getWitness } from "./witness/WitnessProvider.js";
import { WitnessList } from "./witness/WitnessList.js";
import { makeButtons } from "./notes/buttons.js";

NoteForm()
makeButtons()

getCriminals()
.then(getNotes)
.then(NoteList)
.then(CriminalsList)
.then(initializeDetailButtonEvents)

getWitness().then(WitnessList)

getConvictions().then(ConvictionSelect)




