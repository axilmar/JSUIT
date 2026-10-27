import { initIcon } from "./icon.js";

//the url of the forward30 outlined svg; resolved relative to this module
const URL_FORWARD30OUTLINED = new URL('../../assets/icons/forward30Outlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a forward30 outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/forward30Outlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initForward30OutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'forward30OutlinedIcon', url: URL_FORWARD30OUTLINED }, ...properties);
}

/**
 * Creates a forward30 outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const forward30OutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initForward30OutlinedIcon(element, ...properties);
    return element;
}
