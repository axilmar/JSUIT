import { initIcon } from "./icon.js";

//the url of the fiber smart record svg; resolved relative to this module
const URL_FIBERSMARTRECORD = new URL('../../assets/icons/fiberSmartRecord.svg', import.meta.url).href;

/**
 * Initializes an icon element as a fiber smart record icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/fiberSmartRecord.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initFiberSmartRecordIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_FIBERSMARTRECORD }, ...properties);
}

/**
 * Creates a fiber smart record icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const fiberSmartRecordIcon = (...properties) => {
    const element = document.createElement('div');
    initFiberSmartRecordIcon(element, ...properties);
    return element;
}
