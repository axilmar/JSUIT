import { initIcon } from "./icon.js";

//the url of the nearby off outlined svg; resolved relative to this module
const URL_NEARBYOFFOUTLINED = new URL('../../assets/icons/nearbyOffOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a nearby off outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/nearbyOffOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initNearbyOffOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'nearbyOffOutlinedIcon', url: URL_NEARBYOFFOUTLINED }, ...properties);
}

/**
 * Creates a nearby off outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const nearbyOffOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initNearbyOffOutlinedIcon(element, ...properties);
    return element;
}
