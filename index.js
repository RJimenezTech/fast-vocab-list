import translate from "translate";
import { masterVocab } from "./utils/masterVocab";

translate.engine = "google";
translate.key = process.env.GOOGLE_KEY;

const text = await translate("Hello world", "es");
console.log(text);

