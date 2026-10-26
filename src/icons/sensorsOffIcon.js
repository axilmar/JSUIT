import { initIcon } from "./icon.js";

//the url of the sensors off svg; resolved relative to this module
const URL_SENSORSOFF = new URL('../../assets/icons/sensorsOff.svg', import.meta.url).href;

/**
 * Initializes an icon element as a sensors off icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/sensorsOff.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSensorsOffIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_SENSORSOFF }, ...properties);
}

/**
 * Creates a sensors off icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const sensorsOffIcon = (...properties) => {
    const element = document.createElement('div');
    initSensorsOffIcon(element, ...properties);
    return element;
}
