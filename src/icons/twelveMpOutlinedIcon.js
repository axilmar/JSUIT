import { initIcon } from "./icon.js";

//the url of the twelve mp outlined svg; resolved relative to this module
const URL_TWELVEMPOUTLINED = new URL('../../assets/icons/twelveMpOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a twelve mp outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/twelveMpOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initTwelveMpOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_TWELVEMPOUTLINED }, ...properties);
}

/**
 * Creates a twelve mp outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const twelveMpOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initTwelveMpOutlinedIcon(element, ...properties);
    return element;
}
