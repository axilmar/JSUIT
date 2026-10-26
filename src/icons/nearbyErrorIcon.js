import { initIcon } from "./icon.js";

//the url of the nearby error svg; resolved relative to this module
const URL_NEARBYERROR = new URL('../../assets/icons/nearbyError.svg', import.meta.url).href;

/**
 * Initializes an icon element as a nearby error icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/nearbyError.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initNearbyErrorIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_NEARBYERROR }, ...properties);
}

/**
 * Creates a nearby error icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const nearbyErrorIcon = (...properties) => {
    const element = document.createElement('div');
    initNearbyErrorIcon(element, ...properties);
    return element;
}
