import { initIcon } from "./icon.js";

//the url of the volcano svg; resolved relative to this module
const URL_VOLCANO = new URL('../../assets/icons/volcano.svg', import.meta.url).href;

/**
 * Initializes an icon element as a volcano icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/volcano.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initVolcanoIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'volcanoIcon', url: URL_VOLCANO }, ...properties);
}

/**
 * Creates a volcano icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const volcanoIcon = (...properties) => {
    const element = document.createElement('div');
    initVolcanoIcon(element, ...properties);
    return element;
}
