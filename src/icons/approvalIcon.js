import { initIcon } from "./icon.js";

//the url of the approval svg; resolved relative to this module
const URL_APPROVAL = new URL('../../assets/icons/approval.svg', import.meta.url).href;

/**
 * Initializes an icon element as an approval icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/approval.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initApprovalIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'approvalIcon', url: URL_APPROVAL }, ...properties);
}

/**
 * Creates an approval icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const approvalIcon = (...properties) => {
    const element = document.createElement('div');
    initApprovalIcon(element, ...properties);
    return element;
}
