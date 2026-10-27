import { initIcon } from "./icon.js";

//the url of the car crash outlined svg; resolved relative to this module
const URL_CARCRASHOUTLINED = new URL('../../assets/icons/carCrashOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a car crash outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/carCrashOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initCarCrashOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'carCrashOutlinedIcon', url: URL_CARCRASHOUTLINED }, ...properties);
}

/**
 * Creates a car crash outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const carCrashOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initCarCrashOutlinedIcon(element, ...properties);
    return element;
}
