import * as pdfjsLib from 'pdfjs-dist/build/pdf';

if (typeof window !== 'undefined' && 'Worker' in window) {
  const PdfjsWorker = new Worker(new URL('pdfjs-dist/build/pdf.worker', import.meta.url));
  pdfjsLib.GlobalWorkerOptions.workerSrc = 'pdfjs-dist/build/pdf.worker.js';
  pdfjsLib.GlobalWorkerOptions.workerPort = PdfjsWorker;
}


export const getDocument = (pdfFile) => pdfjsLib.getDocument(pdfFile).promise;

export const getPage = async (page, pdfDoc, canvas) => {
  const pdfPage = await pdfDoc.getPage(page);
  const viewport = pdfPage.getViewport({ scale: 1.0 });
  canvas.width = viewport.width; // eslint-disable-line no-param-reassign
  canvas.height = viewport.height; // eslint-disable-line no-param-reassign
  const canvasContext = canvas.getContext('2d');

  const { promise } = pdfPage.render({
    canvasContext,
    viewport,
  });
  return promise;
};

export const getDocFirstPage = async (pdfFile, canvas) => {
  const pdfDoc = await getDocument(pdfFile);
  const task = getPage(1, pdfDoc, canvas);
  return {
    pdfDoc,
    task,
  };
};
