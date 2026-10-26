import { initIcon } from "./icon.js";

//the url of the control point svg; resolved relative to this module
const URL_CONTROLPOINT = new URL('../../assets/icons/controlPoint.svg', import.meta.url).href;

/**
 * Initializes an icon element as a control point icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/controlPoint.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initControlPointIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_CONTROLPOINT }, ...properties);
}

/**
 * Creates a control point icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const controlPointIcon = (...properties) => {
    const element = document.createElement('div');
    initControlPointIcon(element, ...properties);
    return element;
}
