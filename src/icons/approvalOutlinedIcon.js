import { initIcon } from "./icon.js";

//the url of the approval outlined svg; resolved relative to this module
const URL_APPROVALOUTLINED = new URL('../../assets/icons/approvalOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as an approval outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/approvalOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initApprovalOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_APPROVALOUTLINED }, ...properties);
}

/**
 * Creates an approval outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const approvalOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initApprovalOutlinedIcon(element, ...properties);
    return element;
}
