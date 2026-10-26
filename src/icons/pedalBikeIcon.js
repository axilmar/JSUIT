import { initIcon } from "./icon.js";

//the url of the pedal bike svg; resolved relative to this module
const URL_PEDALBIKE = new URL('../../assets/icons/pedalBike.svg', import.meta.url).href;

/**
 * Initializes an icon element as a pedal bike icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/pedalBike.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initPedalBikeIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_PEDALBIKE }, ...properties);
}

/**
 * Creates a pedal bike icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const pedalBikeIcon = (...properties) => {
    const element = document.createElement('div');
    initPedalBikeIcon(element, ...properties);
    return element;
}
