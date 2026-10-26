import { initIcon } from "./icon.js";

//the url of the sign language svg; resolved relative to this module
const URL_SIGNLANGUAGE = new URL('../../assets/icons/signLanguage.svg', import.meta.url).href;

/**
 * Initializes an icon element as a sign language icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/signLanguage.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSignLanguageIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_SIGNLANGUAGE }, ...properties);
}

/**
 * Creates a sign language icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const signLanguageIcon = (...properties) => {
    const element = document.createElement('div');
    initSignLanguageIcon(element, ...properties);
    return element;
}
