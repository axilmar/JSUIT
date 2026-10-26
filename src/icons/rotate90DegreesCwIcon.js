import { initIcon } from "./icon.js";

//the url of the rotate90 degrees cw svg; resolved relative to this module
const URL_ROTATE90DEGREESCW = new URL('../../assets/icons/rotate90DegreesCw.svg', import.meta.url).href;

/**
 * Initializes an icon element as a rotate90 degrees cw icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/rotate90DegreesCw.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initRotate90DegreesCwIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_ROTATE90DEGREESCW }, ...properties);
}

/**
 * Creates a rotate90 degrees cw icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const rotate90DegreesCwIcon = (...properties) => {
    const element = document.createElement('div');
    initRotate90DegreesCwIcon(element, ...properties);
    return element;
}
