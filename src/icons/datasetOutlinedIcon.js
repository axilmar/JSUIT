import { initIcon } from "./icon.js";

//the url of the dataset outlined svg; resolved relative to this module
const URL_DATASETOUTLINED = new URL('../../assets/icons/datasetOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a dataset outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/datasetOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initDatasetOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'datasetOutlinedIcon', url: URL_DATASETOUTLINED }, ...properties);
}

/**
 * Creates a dataset outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const datasetOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initDatasetOutlinedIcon(element, ...properties);
    return element;
}
