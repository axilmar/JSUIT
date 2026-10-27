import { initIcon } from "./icon.js";

//the url of the connecting airports svg; resolved relative to this module
const URL_CONNECTINGAIRPORTS = new URL('../../assets/icons/connectingAirports.svg', import.meta.url).href;

/**
 * Initializes an icon element as a connecting airports icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/connectingAirports.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initConnectingAirportsIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'connectingAirportsIcon', url: URL_CONNECTINGAIRPORTS }, ...properties);
}

/**
 * Creates a connecting airports icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const connectingAirportsIcon = (...properties) => {
    const element = document.createElement('div');
    initConnectingAirportsIcon(element, ...properties);
    return element;
}
