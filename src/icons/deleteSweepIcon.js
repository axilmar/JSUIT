import { initIcon } from "./icon.js";

//the url of the delete sweep svg; resolved relative to this module
const URL_DELETESWEEP = new URL('../../assets/icons/deleteSweep.svg', import.meta.url).href;

/**
 * Initializes an icon element as a delete sweep icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/deleteSweep.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initDeleteSweepIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'deleteSweepIcon', url: URL_DELETESWEEP }, ...properties);
}

/**
 * Creates a delete sweep icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const deleteSweepIcon = (...properties) => {
    const element = document.createElement('div');
    initDeleteSweepIcon(element, ...properties);
    return element;
}
