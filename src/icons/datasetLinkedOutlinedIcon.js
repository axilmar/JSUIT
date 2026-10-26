import { initIcon } from "./icon.js";

//the url of the dataset linked outlined svg; resolved relative to this module
const URL_DATASETLINKEDOUTLINED = new URL('../../assets/icons/datasetLinkedOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a dataset linked outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/datasetLinkedOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initDatasetLinkedOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_DATASETLINKEDOUTLINED }, ...properties);
}

/**
 * Creates a dataset linked outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const datasetLinkedOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initDatasetLinkedOutlinedIcon(element, ...properties);
    return element;
}
