import { initIcon } from "./icon.js";

//the url of the five mp outlined svg; resolved relative to this module
const URL_FIVEMPOUTLINED = new URL('../../assets/icons/fiveMpOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a five mp outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/fiveMpOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initFiveMpOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_FIVEMPOUTLINED }, ...properties);
}

/**
 * Creates a five mp outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const fiveMpOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initFiveMpOutlinedIcon(element, ...properties);
    return element;
}
