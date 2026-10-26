import { initIcon } from "./icon.js";

//the url of the local airport outlined svg; resolved relative to this module
const URL_LOCALAIRPORTOUTLINED = new URL('../../assets/icons/localAirportOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a local airport outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/localAirportOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initLocalAirportOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_LOCALAIRPORTOUTLINED }, ...properties);
}

/**
 * Creates a local airport outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const localAirportOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initLocalAirportOutlinedIcon(element, ...properties);
    return element;
}
