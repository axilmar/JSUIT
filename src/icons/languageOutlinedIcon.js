import { initIcon } from "./icon.js";

//the url of the language outlined svg; resolved relative to this module
const URL_LANGUAGEOUTLINED = new URL('../../assets/icons/languageOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a language outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/languageOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initLanguageOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'languageOutlinedIcon', url: URL_LANGUAGEOUTLINED }, ...properties);
}

/**
 * Creates a language outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const languageOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initLanguageOutlinedIcon(element, ...properties);
    return element;
}
