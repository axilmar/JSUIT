import { initIcon } from "./icon.js";

//the url of the checklist outlined svg; resolved relative to this module
const URL_CHECKLISTOUTLINED = new URL('../../assets/icons/checklistOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a checklist outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/checklistOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initChecklistOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_CHECKLISTOUTLINED }, ...properties);
}

/**
 * Creates a checklist outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const checklistOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initChecklistOutlinedIcon(element, ...properties);
    return element;
}
