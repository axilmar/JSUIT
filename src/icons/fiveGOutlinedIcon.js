import { initIcon } from "./icon.js";

//the url of the five g outlined svg; resolved relative to this module
const URL_FIVEGOUTLINED = new URL('../../assets/icons/fiveGOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a five g outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/fiveGOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initFiveGOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'fiveGOutlinedIcon', url: URL_FIVEGOUTLINED }, ...properties);
}

/**
 * Creates a five g outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const fiveGOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initFiveGOutlinedIcon(element, ...properties);
    return element;
}
