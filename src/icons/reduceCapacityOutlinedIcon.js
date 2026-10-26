import { initIcon } from "./icon.js";

//the url of the reduce capacity outlined svg; resolved relative to this module
const URL_REDUCECAPACITYOUTLINED = new URL('../../assets/icons/reduceCapacityOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a reduce capacity outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/reduceCapacityOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initReduceCapacityOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_REDUCECAPACITYOUTLINED }, ...properties);
}

/**
 * Creates a reduce capacity outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const reduceCapacityOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initReduceCapacityOutlinedIcon(element, ...properties);
    return element;
}
