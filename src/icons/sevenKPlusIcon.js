import { initIcon } from "./icon.js";

//the url of the seven k plus svg; resolved relative to this module
const URL_SEVENKPLUS = new URL('../../assets/icons/sevenKPlus.svg', import.meta.url).href;

/**
 * Initializes an icon element as a seven k plus icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/sevenKPlus.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSevenKPlusIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'sevenKPlusIcon', url: URL_SEVENKPLUS }, ...properties);
}

/**
 * Creates a seven k plus icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const sevenKPlusIcon = (...properties) => {
    const element = document.createElement('div');
    initSevenKPlusIcon(element, ...properties);
    return element;
}
