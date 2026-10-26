import { initIcon } from "./icon.js";

//the url of the connecting airports outlined svg; resolved relative to this module
const URL_CONNECTINGAIRPORTSOUTLINED = new URL('../../assets/icons/connectingAirportsOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a connecting airports outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/connectingAirportsOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initConnectingAirportsOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_CONNECTINGAIRPORTSOUTLINED }, ...properties);
}

/**
 * Creates a connecting airports outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const connectingAirportsOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initConnectingAirportsOutlinedIcon(element, ...properties);
    return element;
}
