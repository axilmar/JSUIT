import { initIcon } from "./icon.js";

//the url of the fiber manual record svg; resolved relative to this module
const URL_FIBERMANUALRECORD = new URL('../../assets/icons/fiberManualRecord.svg', import.meta.url).href;

/**
 * Initializes an icon element as a fiber manual record icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/fiberManualRecord.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initFiberManualRecordIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'fiberManualRecordIcon', url: URL_FIBERMANUALRECORD }, ...properties);
}

/**
 * Creates a fiber manual record icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const fiberManualRecordIcon = (...properties) => {
    const element = document.createElement('div');
    initFiberManualRecordIcon(element, ...properties);
    return element;
}
