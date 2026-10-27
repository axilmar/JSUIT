import { initIcon } from "./icon.js";

//the url of the rotate90 degrees ccw svg; resolved relative to this module
const URL_ROTATE90DEGREESCCW = new URL('../../assets/icons/rotate90DegreesCcw.svg', import.meta.url).href;

/**
 * Initializes an icon element as a rotate90 degrees ccw icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/rotate90DegreesCcw.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initRotate90DegreesCcwIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'rotate90DegreesCcwIcon', url: URL_ROTATE90DEGREESCCW }, ...properties);
}

/**
 * Creates a rotate90 degrees ccw icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const rotate90DegreesCcwIcon = (...properties) => {
    const element = document.createElement('div');
    initRotate90DegreesCcwIcon(element, ...properties);
    return element;
}
