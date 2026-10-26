import { initIcon } from "./icon.js";

//the url of the g translate svg; resolved relative to this module
const URL_GTRANSLATE = new URL('../../assets/icons/gTranslate.svg', import.meta.url).href;

/**
 * Initializes an icon element as a g translate icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/gTranslate.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initGTranslateIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_GTRANSLATE }, ...properties);
}

/**
 * Creates a g translate icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const gTranslateIcon = (...properties) => {
    const element = document.createElement('div');
    initGTranslateIcon(element, ...properties);
    return element;
}
