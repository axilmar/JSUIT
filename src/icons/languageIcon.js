import { initIcon } from "./icon.js";

//the url of the language svg; resolved relative to this module
const URL_LANGUAGE = new URL('../../assets/icons/language.svg', import.meta.url).href;

/**
 * Initializes an icon element as a language icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/language.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initLanguageIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_LANGUAGE }, ...properties);
}

/**
 * Creates a language icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const languageIcon = (...properties) => {
    const element = document.createElement('div');
    initLanguageIcon(element, ...properties);
    return element;
}
