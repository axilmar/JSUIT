import { initIcon } from "./icon.js";

//the url of the system security update warning svg; resolved relative to this module
const URL_SYSTEMSECURITYUPDATEWARNING = new URL('../../assets/icons/systemSecurityUpdateWarning.svg', import.meta.url).href;

/**
 * Initializes an icon element as a system security update warning icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/systemSecurityUpdateWarning.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSystemSecurityUpdateWarningIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'systemSecurityUpdateWarningIcon', url: URL_SYSTEMSECURITYUPDATEWARNING }, ...properties);
}

/**
 * Creates a system security update warning icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const systemSecurityUpdateWarningIcon = (...properties) => {
    const element = document.createElement('div');
    initSystemSecurityUpdateWarningIcon(element, ...properties);
    return element;
}
