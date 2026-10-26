import { initIcon } from "./icon.js";

//the url of the assured workload svg; resolved relative to this module
const URL_ASSUREDWORKLOAD = new URL('../../assets/icons/assuredWorkload.svg', import.meta.url).href;

/**
 * Initializes an icon element as an assured workload icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/assuredWorkload.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initAssuredWorkloadIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_ASSUREDWORKLOAD }, ...properties);
}

/**
 * Creates an assured workload icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const assuredWorkloadIcon = (...properties) => {
    const element = document.createElement('div');
    initAssuredWorkloadIcon(element, ...properties);
    return element;
}
