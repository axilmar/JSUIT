import { initIcon } from "./icon.js";

//the url of the checklist rtl svg; resolved relative to this module
const URL_CHECKLISTRTL = new URL('../../assets/icons/checklistRtl.svg', import.meta.url).href;

/**
 * Initializes an icon element as a checklist rtl icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/checklistRtl.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initChecklistRtlIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'checklistRtlIcon', url: URL_CHECKLISTRTL }, ...properties);
}

/**
 * Creates a checklist rtl icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const checklistRtlIcon = (...properties) => {
    const element = document.createElement('div');
    initChecklistRtlIcon(element, ...properties);
    return element;
}
