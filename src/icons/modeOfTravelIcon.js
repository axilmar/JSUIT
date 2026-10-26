import { initIcon } from "./icon.js";

//the url of the mode of travel svg; resolved relative to this module
const URL_MODEOFTRAVEL = new URL('../../assets/icons/modeOfTravel.svg', import.meta.url).href;

/**
 * Initializes an icon element as a mode of travel icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/modeOfTravel.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initModeOfTravelIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_MODEOFTRAVEL }, ...properties);
}

/**
 * Creates a mode of travel icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const modeOfTravelIcon = (...properties) => {
    const element = document.createElement('div');
    initModeOfTravelIcon(element, ...properties);
    return element;
}
