import { initIcon } from "./icon.js";

//the url of the emoji flags outlined svg; resolved relative to this module
const URL_EMOJIFLAGSOUTLINED = new URL('../../assets/icons/emojiFlagsOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as an emoji flags outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/emojiFlagsOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initEmojiFlagsOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_EMOJIFLAGSOUTLINED }, ...properties);
}

/**
 * Creates an emoji flags outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const emojiFlagsOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initEmojiFlagsOutlinedIcon(element, ...properties);
    return element;
}
