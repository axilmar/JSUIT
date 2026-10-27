import { initIcon } from "./icon.js";

//the url of the checklist svg; resolved relative to this module
const URL_CHECKLIST = new URL('../../assets/icons/checklist.svg', import.meta.url).href;

/**
 * Initializes an icon element as a checklist icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/checklist.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initChecklistIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'checklistIcon', url: URL_CHECKLIST }, ...properties);
}

/**
 * Creates a checklist icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const checklistIcon = (...properties) => {
    const element = document.createElement('div');
    initChecklistIcon(element, ...properties);
    return element;
}
