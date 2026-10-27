import { initIcon } from "./icon.js";

//the url of the fiber smart record outlined svg; resolved relative to this module
const URL_FIBERSMARTRECORDOUTLINED = new URL('../../assets/icons/fiberSmartRecordOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a fiber smart record outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/fiberSmartRecordOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initFiberSmartRecordOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'fiberSmartRecordOutlinedIcon', url: URL_FIBERSMARTRECORDOUTLINED }, ...properties);
}

/**
 * Creates a fiber smart record outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const fiberSmartRecordOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initFiberSmartRecordOutlinedIcon(element, ...properties);
    return element;
}
