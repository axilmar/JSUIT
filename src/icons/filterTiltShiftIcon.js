import { initIcon } from "./icon.js";

//the url of the filter tilt shift svg; resolved relative to this module
const URL_FILTERTILTSHIFT = new URL('../../assets/icons/filterTiltShift.svg', import.meta.url).href;

/**
 * Initializes an icon element as a filter tilt shift icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/filterTiltShift.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initFilterTiltShiftIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'filterTiltShiftIcon', url: URL_FILTERTILTSHIFT }, ...properties);
}

/**
 * Creates a filter tilt shift icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const filterTiltShiftIcon = (...properties) => {
    const element = document.createElement('div');
    initFilterTiltShiftIcon(element, ...properties);
    return element;
}
