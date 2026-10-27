import { initIcon } from "./icon.js";

//the url of the translate svg; resolved relative to this module
const URL_TRANSLATE = new URL('../../assets/icons/translate.svg', import.meta.url).href;

/**
 * Initializes an icon element as a translate icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/translate.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initTranslateIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'translateIcon', url: URL_TRANSLATE }, ...properties);
}

/**
 * Creates a translate icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const translateIcon = (...properties) => {
    const element = document.createElement('div');
    initTranslateIcon(element, ...properties);
    return element;
}
