import { initIcon } from "./icon.js";

//the url of the eleven mp outlined svg; resolved relative to this module
const URL_ELEVENMPOUTLINED = new URL('../../assets/icons/elevenMpOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as an eleven mp outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/elevenMpOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initElevenMpOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'elevenMpOutlinedIcon', url: URL_ELEVENMPOUTLINED }, ...properties);
}

/**
 * Creates an eleven mp outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const elevenMpOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initElevenMpOutlinedIcon(element, ...properties);
    return element;
}
