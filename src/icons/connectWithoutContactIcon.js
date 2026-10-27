import { initIcon } from "./icon.js";

//the url of the connect without contact svg; resolved relative to this module
const URL_CONNECTWITHOUTCONTACT = new URL('../../assets/icons/connectWithoutContact.svg', import.meta.url).href;

/**
 * Initializes an icon element as a connect without contact icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/connectWithoutContact.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initConnectWithoutContactIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'connectWithoutContactIcon', url: URL_CONNECTWITHOUTCONTACT }, ...properties);
}

/**
 * Creates a connect without contact icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const connectWithoutContactIcon = (...properties) => {
    const element = document.createElement('div');
    initConnectWithoutContactIcon(element, ...properties);
    return element;
}
