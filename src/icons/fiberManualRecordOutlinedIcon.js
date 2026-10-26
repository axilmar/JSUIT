import { initIcon } from "./icon.js";

//the url of the fiber manual record outlined svg; resolved relative to this module
const URL_FIBERMANUALRECORDOUTLINED = new URL('../../assets/icons/fiberManualRecordOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a fiber manual record outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/fiberManualRecordOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initFiberManualRecordOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_FIBERMANUALRECORDOUTLINED }, ...properties);
}

/**
 * Creates a fiber manual record outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const fiberManualRecordOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initFiberManualRecordOutlinedIcon(element, ...properties);
    return element;
}
