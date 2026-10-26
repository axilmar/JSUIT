import { initIcon } from "./icon.js";

//the url of the flag circle outlined svg; resolved relative to this module
const URL_FLAGCIRCLEOUTLINED = new URL('../../assets/icons/flagCircleOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a flag circle outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/flagCircleOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initFlagCircleOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_FLAGCIRCLEOUTLINED }, ...properties);
}

/**
 * Creates a flag circle outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const flagCircleOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initFlagCircleOutlinedIcon(element, ...properties);
    return element;
}
