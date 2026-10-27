import { initIcon } from "./icon.js";

//the url of the scuba diving outlined svg; resolved relative to this module
const URL_SCUBADIVINGOUTLINED = new URL('../../assets/icons/scubaDivingOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a scuba diving outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/scubaDivingOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initScubaDivingOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'scubaDivingOutlinedIcon', url: URL_SCUBADIVINGOUTLINED }, ...properties);
}

/**
 * Creates a scuba diving outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const scubaDivingOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initScubaDivingOutlinedIcon(element, ...properties);
    return element;
}
