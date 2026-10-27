import { initIcon } from "./icon.js";

//the url of the sixty fps select outlined svg; resolved relative to this module
const URL_SIXTYFPSSELECTOUTLINED = new URL('../../assets/icons/sixtyFpsSelectOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a sixty fps select outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/sixtyFpsSelectOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSixtyFpsSelectOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'sixtyFpsSelectOutlinedIcon', url: URL_SIXTYFPSSELECTOUTLINED }, ...properties);
}

/**
 * Creates a sixty fps select outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const sixtyFpsSelectOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initSixtyFpsSelectOutlinedIcon(element, ...properties);
    return element;
}
