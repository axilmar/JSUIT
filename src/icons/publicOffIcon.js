import { initIcon } from "./icon.js";

//the url of the public off svg; resolved relative to this module
const URL_PUBLICOFF = new URL('../../assets/icons/publicOff.svg', import.meta.url).href;

/**
 * Initializes an icon element as a public off icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/publicOff.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initPublicOffIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'publicOffIcon', url: URL_PUBLICOFF }, ...properties);
}

/**
 * Creates a public off icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const publicOffIcon = (...properties) => {
    const element = document.createElement('div');
    initPublicOffIcon(element, ...properties);
    return element;
}
