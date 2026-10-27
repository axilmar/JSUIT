import { initIcon } from "./icon.js";

//the url of the dataset svg; resolved relative to this module
const URL_DATASET = new URL('../../assets/icons/dataset.svg', import.meta.url).href;

/**
 * Initializes an icon element as a dataset icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/dataset.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initDatasetIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'datasetIcon', url: URL_DATASET }, ...properties);
}

/**
 * Creates a dataset icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const datasetIcon = (...properties) => {
    const element = document.createElement('div');
    initDatasetIcon(element, ...properties);
    return element;
}
