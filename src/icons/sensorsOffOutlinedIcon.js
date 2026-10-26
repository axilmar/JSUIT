import { initIcon } from "./icon.js";

//the url of the sensors off outlined svg; resolved relative to this module
const URL_SENSORSOFFOUTLINED = new URL('../../assets/icons/sensorsOffOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a sensors off outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/sensorsOffOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSensorsOffOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_SENSORSOFFOUTLINED }, ...properties);
}

/**
 * Creates a sensors off outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const sensorsOffOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initSensorsOffOutlinedIcon(element, ...properties);
    return element;
}
