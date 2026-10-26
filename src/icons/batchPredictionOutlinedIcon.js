import { initIcon } from "./icon.js";

//the url of the batch prediction outlined svg; resolved relative to this module
const URL_BATCHPREDICTIONOUTLINED = new URL('../../assets/icons/batchPredictionOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a batch prediction outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/batchPredictionOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initBatchPredictionOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_BATCHPREDICTIONOUTLINED }, ...properties);
}

/**
 * Creates a batch prediction outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const batchPredictionOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initBatchPredictionOutlinedIcon(element, ...properties);
    return element;
}
