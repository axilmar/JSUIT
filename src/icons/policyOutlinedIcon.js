import { initIcon } from "./icon.js";

//the url of the policy outlined svg; resolved relative to this module
const URL_POLICYOUTLINED = new URL('../../assets/icons/policyOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a policy outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/policyOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initPolicyOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'policyOutlinedIcon', url: URL_POLICYOUTLINED }, ...properties);
}

/**
 * Creates a policy outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const policyOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initPolicyOutlinedIcon(element, ...properties);
    return element;
}
