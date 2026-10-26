import { initIcon } from "./icon.js";

//the url of the nearby error outlined svg; resolved relative to this module
const URL_NEARBYERROROUTLINED = new URL('../../assets/icons/nearbyErrorOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a nearby error outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/nearbyErrorOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initNearbyErrorOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_NEARBYERROROUTLINED }, ...properties);
}

/**
 * Creates a nearby error outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const nearbyErrorOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initNearbyErrorOutlinedIcon(element, ...properties);
    return element;
}
