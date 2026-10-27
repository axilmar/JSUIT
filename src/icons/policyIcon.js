import { initIcon } from "./icon.js";

//the url of the policy svg; resolved relative to this module
const URL_POLICY = new URL('../../assets/icons/policy.svg', import.meta.url).href;

/**
 * Initializes an icon element as a policy icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/policy.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initPolicyIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'policyIcon', url: URL_POLICY }, ...properties);
}

/**
 * Creates a policy icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const policyIcon = (...properties) => {
    const element = document.createElement('div');
    initPolicyIcon(element, ...properties);
    return element;
}
