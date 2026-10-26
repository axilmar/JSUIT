import { initIcon } from "./icon.js";

//the url of the batch prediction svg; resolved relative to this module
const URL_BATCHPREDICTION = new URL('../../assets/icons/batchPrediction.svg', import.meta.url).href;

/**
 * Initializes an icon element as a batch prediction icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/batchPrediction.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initBatchPredictionIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_BATCHPREDICTION }, ...properties);
}

/**
 * Creates a batch prediction icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const batchPredictionIcon = (...properties) => {
    const element = document.createElement('div');
    initBatchPredictionIcon(element, ...properties);
    return element;
}
