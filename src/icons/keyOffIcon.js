import { initIcon } from "./icon.js";

//the url of the key off svg; resolved relative to this module
const URL_KEYOFF = new URL('../../assets/icons/keyOff.svg', import.meta.url).href;

/**
 * Initializes an icon element as a key off icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/keyOff.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initKeyOffIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'keyOffIcon', url: URL_KEYOFF }, ...properties);
}

/**
 * Creates a key off icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const keyOffIcon = (...properties) => {
    const element = document.createElement('div');
    initKeyOffIcon(element, ...properties);
    return element;
}
