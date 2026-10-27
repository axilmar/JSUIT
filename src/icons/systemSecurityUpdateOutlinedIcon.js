import { initIcon } from "./icon.js";

//the url of the system security update outlined svg; resolved relative to this module
const URL_SYSTEMSECURITYUPDATEOUTLINED = new URL('../../assets/icons/systemSecurityUpdateOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a system security update outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/systemSecurityUpdateOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSystemSecurityUpdateOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'systemSecurityUpdateOutlinedIcon', url: URL_SYSTEMSECURITYUPDATEOUTLINED }, ...properties);
}

/**
 * Creates a system security update outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const systemSecurityUpdateOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initSystemSecurityUpdateOutlinedIcon(element, ...properties);
    return element;
}
