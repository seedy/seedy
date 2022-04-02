import * as pdfjsLib from 'pdfjs-dist/build/pdf';

if (typeof window !== 'undefined' && 'Worker' in window) {
  const PdfjsWorker = new Worker(new URL('pdfjs-dist/build/pdf.worker', import.meta.url));
  pdfjsLib.GlobalWorkerOptions.workerSrc = 'pdfjs-dist/build/pdf.worker.js';
  pdfjsLib.GlobalWorkerOptions.workerPort = PdfjsWorker;
}


export const getDocument = (pdfFile) => pdfjsLib.getDocument(pdfFile).promise;
