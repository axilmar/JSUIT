import { initIcon } from "./icon.js";

//the url of the support agent outlined svg; resolved relative to this module
const URL_SUPPORTAGENTOUTLINED = new URL('../../assets/icons/supportAgentOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a support agent outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/supportAgentOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSupportAgentOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_SUPPORTAGENTOUTLINED }, ...properties);
}

/**
 * Creates a support agent outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const supportAgentOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initSupportAgentOutlinedIcon(element, ...properties);
    return element;
}
