import translate from "translate";
import {masterVocab} from "./masterVocab.js";
import PDFDocument from "pdfkit";
import fs from 'pdfkit'

const doc = new PDFDocument;
doc.pipe(fs.createWriteStream('output.pdf'));
doc.pipe(res);

translate.engine = "google";
translate.key = process.env.GOOGLE_KEY;

const numWords = 3;
for (let i = 0; i <= numWords; i++) {
    doc.text(masterVocab[i].word,await translate(masterVocab[i].word, "es"))
}

doc.end();