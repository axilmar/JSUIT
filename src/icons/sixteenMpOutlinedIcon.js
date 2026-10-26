import { initIcon } from "./icon.js";

//the url of the sixteen mp outlined svg; resolved relative to this module
const URL_SIXTEENMPOUTLINED = new URL('../../assets/icons/sixteenMpOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a sixteen mp outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/sixteenMpOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSixteenMpOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_SIXTEENMPOUTLINED }, ...properties);
}

/**
 * Creates a sixteen mp outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const sixteenMpOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initSixteenMpOutlinedIcon(element, ...properties);
    return element;
}
