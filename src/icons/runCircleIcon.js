import { initIcon } from "./icon.js";

//the url of the run circle svg; resolved relative to this module
const URL_RUNCIRCLE = new URL('../../assets/icons/runCircle.svg', import.meta.url).href;

/**
 * Initializes an icon element as a run circle icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/runCircle.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initRunCircleIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'runCircleIcon', url: URL_RUNCIRCLE }, ...properties);
}

/**
 * Creates a run circle icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const runCircleIcon = (...properties) => {
    const element = document.createElement('div');
    initRunCircleIcon(element, ...properties);
    return element;
}
