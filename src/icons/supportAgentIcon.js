import { initIcon } from "./icon.js";

//the url of the support agent svg; resolved relative to this module
const URL_SUPPORTAGENT = new URL('../../assets/icons/supportAgent.svg', import.meta.url).href;

/**
 * Initializes an icon element as a support agent icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/supportAgent.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSupportAgentIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'supportAgentIcon', url: URL_SUPPORTAGENT }, ...properties);
}

/**
 * Creates a support agent icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const supportAgentIcon = (...properties) => {
    const element = document.createElement('div');
    initSupportAgentIcon(element, ...properties);
    return element;
}
