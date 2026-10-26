import { initIcon } from "./icon.js";

//the url of the two mp outlined svg; resolved relative to this module
const URL_TWOMPOUTLINED = new URL('../../assets/icons/twoMpOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a two mp outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/twoMpOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initTwoMpOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_TWOMPOUTLINED }, ...properties);
}

/**
 * Creates a two mp outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const twoMpOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initTwoMpOutlinedIcon(element, ...properties);
    return element;
}
