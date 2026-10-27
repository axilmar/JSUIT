import { initIcon } from "./icon.js";

//the url of the local pizza svg; resolved relative to this module
const URL_LOCALPIZZA = new URL('../../assets/icons/localPizza.svg', import.meta.url).href;

/**
 * Initializes an icon element as a local pizza icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/localPizza.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initLocalPizzaIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'localPizzaIcon', url: URL_LOCALPIZZA }, ...properties);
}

/**
 * Creates a local pizza icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const localPizzaIcon = (...properties) => {
    const element = document.createElement('div');
    initLocalPizzaIcon(element, ...properties);
    return element;
}
