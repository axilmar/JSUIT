import { initIcon } from "./icon.js";

//the url of the filter tilt shift outlined svg; resolved relative to this module
const URL_FILTERTILTSHIFTOUTLINED = new URL('../../assets/icons/filterTiltShiftOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a filter tilt shift outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/filterTiltShiftOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initFilterTiltShiftOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_FILTERTILTSHIFTOUTLINED }, ...properties);
}

/**
 * Creates a filter tilt shift outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const filterTiltShiftOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initFilterTiltShiftOutlinedIcon(element, ...properties);
    return element;
}
