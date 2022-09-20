import translate from "translate";
import masterVocab from "./masterVocab";

translate.engine = "google";
translate.key = process.env.GOOGLE_KEY;

const numWords = 5;
for (let i = 0; i <= numWords; i++) {
    const text = await translate(masterVocab[i], "es");
    console.log(text);
}