import { initIcon } from "./icon.js";

//the url of the next plan outlined svg; resolved relative to this module
const URL_NEXTPLANOUTLINED = new URL('../../assets/icons/nextPlanOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a next plan outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/nextPlanOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initNextPlanOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'nextPlanOutlinedIcon', url: URL_NEXTPLANOUTLINED }, ...properties);
}

/**
 * Creates a next plan outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const nextPlanOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initNextPlanOutlinedIcon(element, ...properties);
    return element;
}
