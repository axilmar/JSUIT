import { initIcon } from "./icon.js";

//the url of the checklist rtl outlined svg; resolved relative to this module
const URL_CHECKLISTRTLOUTLINED = new URL('../../assets/icons/checklistRtlOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a checklist rtl outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/checklistRtlOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initChecklistRtlOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'checklistRtlOutlinedIcon', url: URL_CHECKLISTRTLOUTLINED }, ...properties);
}

/**
 * Creates a checklist rtl outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const checklistRtlOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initChecklistRtlOutlinedIcon(element, ...properties);
    return element;
}
