import { initIcon } from "./icon.js";

//the url of the workspace premium svg; resolved relative to this module
const URL_WORKSPACEPREMIUM = new URL('../../assets/icons/workspacePremium.svg', import.meta.url).href;

/**
 * Initializes an icon element as a workspace premium icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/workspacePremium.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initWorkspacePremiumIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'workspacePremiumIcon', url: URL_WORKSPACEPREMIUM }, ...properties);
}

/**
 * Creates a workspace premium icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const workspacePremiumIcon = (...properties) => {
    const element = document.createElement('div');
    initWorkspacePremiumIcon(element, ...properties);
    return element;
}
