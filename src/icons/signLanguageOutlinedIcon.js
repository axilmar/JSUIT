import { initIcon } from "./icon.js";

//the url of the sign language outlined svg; resolved relative to this module
const URL_SIGNLANGUAGEOUTLINED = new URL('../../assets/icons/signLanguageOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a sign language outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/signLanguageOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSignLanguageOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_SIGNLANGUAGEOUTLINED }, ...properties);
}

/**
 * Creates a sign language outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const signLanguageOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initSignLanguageOutlinedIcon(element, ...properties);
    return element;
}
