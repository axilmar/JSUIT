import { initIcon } from "./icon.js";

//the url of the not accessible svg; resolved relative to this module
const URL_NOTACCESSIBLE = new URL('../../assets/icons/notAccessible.svg', import.meta.url).href;

/**
 * Initializes an icon element as a not accessible icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/notAccessible.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initNotAccessibleIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'notAccessibleIcon', url: URL_NOTACCESSIBLE }, ...properties);
}

/**
 * Creates a not accessible icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const notAccessibleIcon = (...properties) => {
    const element = document.createElement('div');
    initNotAccessibleIcon(element, ...properties);
    return element;
}
