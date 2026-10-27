import { initIcon } from "./icon.js";

//the url of the safety divider outlined svg; resolved relative to this module
const URL_SAFETYDIVIDEROUTLINED = new URL('../../assets/icons/safetyDividerOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a safety divider outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/safetyDividerOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSafetyDividerOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'safetyDividerOutlinedIcon', url: URL_SAFETYDIVIDEROUTLINED }, ...properties);
}

/**
 * Creates a safety divider outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const safetyDividerOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initSafetyDividerOutlinedIcon(element, ...properties);
    return element;
}
