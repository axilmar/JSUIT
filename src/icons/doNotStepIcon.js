import { initIcon } from "./icon.js";

//the url of the do not step svg; resolved relative to this module
const URL_DONOTSTEP = new URL('../../assets/icons/doNotStep.svg', import.meta.url).href;

/**
 * Initializes an icon element as a do not step icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/doNotStep.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initDoNotStepIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_DONOTSTEP }, ...properties);
}

/**
 * Creates a do not step icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const doNotStepIcon = (...properties) => {
    const element = document.createElement('div');
    initDoNotStepIcon(element, ...properties);
    return element;
}
