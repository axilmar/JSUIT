import { initIcon } from "./icon.js";

//the url of the rotate90 degrees cw outlined svg; resolved relative to this module
const URL_ROTATE90DEGREESCWOUTLINED = new URL('../../assets/icons/rotate90DegreesCwOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a rotate90 degrees cw outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/rotate90DegreesCwOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initRotate90DegreesCwOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_ROTATE90DEGREESCWOUTLINED }, ...properties);
}

/**
 * Creates a rotate90 degrees cw outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const rotate90DegreesCwOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initRotate90DegreesCwOutlinedIcon(element, ...properties);
    return element;
}
