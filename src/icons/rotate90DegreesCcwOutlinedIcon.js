import { initIcon } from "./icon.js";

//the url of the rotate90 degrees ccw outlined svg; resolved relative to this module
const URL_ROTATE90DEGREESCCWOUTLINED = new URL('../../assets/icons/rotate90DegreesCcwOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a rotate90 degrees ccw outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/rotate90DegreesCcwOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initRotate90DegreesCcwOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'rotate90DegreesCcwOutlinedIcon', url: URL_ROTATE90DEGREESCCWOUTLINED }, ...properties);
}

/**
 * Creates a rotate90 degrees ccw outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const rotate90DegreesCcwOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initRotate90DegreesCcwOutlinedIcon(element, ...properties);
    return element;
}
