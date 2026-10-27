import { initIcon } from "./icon.js";

//the url of the car crash svg; resolved relative to this module
const URL_CARCRASH = new URL('../../assets/icons/carCrash.svg', import.meta.url).href;

/**
 * Initializes an icon element as a car crash icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/carCrash.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initCarCrashIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'carCrashIcon', url: URL_CARCRASH }, ...properties);
}

/**
 * Creates a car crash icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const carCrashIcon = (...properties) => {
    const element = document.createElement('div');
    initCarCrashIcon(element, ...properties);
    return element;
}
