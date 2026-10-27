import { initIcon } from "./icon.js";

//the url of the nearby off svg; resolved relative to this module
const URL_NEARBYOFF = new URL('../../assets/icons/nearbyOff.svg', import.meta.url).href;

/**
 * Initializes an icon element as a nearby off icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/nearbyOff.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initNearbyOffIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'nearbyOffIcon', url: URL_NEARBYOFF }, ...properties);
}

/**
 * Creates a nearby off icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const nearbyOffIcon = (...properties) => {
    const element = document.createElement('div');
    initNearbyOffIcon(element, ...properties);
    return element;
}
