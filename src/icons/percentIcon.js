import { initIcon } from "./icon.js";

//the url of the percent svg; resolved relative to this module
const URL_PERCENT = new URL('../../assets/icons/percent.svg', import.meta.url).href;

/**
 * Initializes an icon element as a percent icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/percent.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initPercentIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_PERCENT }, ...properties);
}

/**
 * Creates a percent icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const percentIcon = (...properties) => {
    const element = document.createElement('div');
    initPercentIcon(element, ...properties);
    return element;
}
