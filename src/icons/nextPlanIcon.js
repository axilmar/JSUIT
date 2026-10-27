import { initIcon } from "./icon.js";

//the url of the next plan svg; resolved relative to this module
const URL_NEXTPLAN = new URL('../../assets/icons/nextPlan.svg', import.meta.url).href;

/**
 * Initializes an icon element as a next plan icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/nextPlan.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initNextPlanIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'nextPlanIcon', url: URL_NEXTPLAN }, ...properties);
}

/**
 * Creates a next plan icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const nextPlanIcon = (...properties) => {
    const element = document.createElement('div');
    initNextPlanIcon(element, ...properties);
    return element;
}
