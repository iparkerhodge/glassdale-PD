import { getCriminals } from "./criminals/CriminalProvider.js";
import { CriminalsList } from "./criminals/CriminalList.js";
import { getConvictions } from "./convictions/ConvictionProvider.js";
import { ConvictionSelect } from "./convictions/ConvictionsSelect.js";
import { getNotes } from "./notes/noteDataProvider.js";
import NoteForm from "./notes/NoteForm.js";
import { NoteList } from "./notes/NoteList.js";

NoteForm()

getCriminals().then(CriminalsList)

getConvictions().then(ConvictionSelect)

getNotes().then(NoteList)
