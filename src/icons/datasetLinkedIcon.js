import { initIcon } from "./icon.js";

//the url of the dataset linked svg; resolved relative to this module
const URL_DATASETLINKED = new URL('../../assets/icons/datasetLinked.svg', import.meta.url).href;

/**
 * Initializes an icon element as a dataset linked icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/datasetLinked.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initDatasetLinkedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_DATASETLINKED }, ...properties);
}

/**
 * Creates a dataset linked icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const datasetLinkedIcon = (...properties) => {
    const element = document.createElement('div');
    initDatasetLinkedIcon(element, ...properties);
    return element;
}
