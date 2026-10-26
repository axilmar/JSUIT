import { initIcon } from "./icon.js";

//the url of the sensors outlined svg; resolved relative to this module
const URL_SENSORSOUTLINED = new URL('../../assets/icons/sensorsOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a sensors outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/sensorsOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSensorsOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_SENSORSOUTLINED }, ...properties);
}

/**
 * Creates a sensors outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const sensorsOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initSensorsOutlinedIcon(element, ...properties);
    return element;
}
