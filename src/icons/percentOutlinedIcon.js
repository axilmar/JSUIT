import { initIcon } from "./icon.js";

//the url of the percent outlined svg; resolved relative to this module
const URL_PERCENTOUTLINED = new URL('../../assets/icons/percentOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a percent outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/percentOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initPercentOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_PERCENTOUTLINED }, ...properties);
}

/**
 * Creates a percent outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const percentOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initPercentOutlinedIcon(element, ...properties);
    return element;
}
