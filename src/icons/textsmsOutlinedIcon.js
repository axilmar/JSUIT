import { initIcon } from "./icon.js";

//the url of the textsms outlined svg; resolved relative to this module
const URL_TEXTSMSOUTLINED = new URL('../../assets/icons/textsmsOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a textsms outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/textsmsOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initTextsmsOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_TEXTSMSOUTLINED }, ...properties);
}

/**
 * Creates a textsms outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const textsmsOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initTextsmsOutlinedIcon(element, ...properties);
    return element;
}
