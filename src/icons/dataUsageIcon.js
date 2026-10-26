import { initIcon } from "./icon.js";

//the url of the data usage svg; resolved relative to this module
const URL_DATAUSAGE = new URL('../../assets/icons/dataUsage.svg', import.meta.url).href;

/**
 * Initializes an icon element as a data usage icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/dataUsage.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initDataUsageIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_DATAUSAGE }, ...properties);
}

/**
 * Creates a data usage icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const dataUsageIcon = (...properties) => {
    const element = document.createElement('div');
    initDataUsageIcon(element, ...properties);
    return element;
}
