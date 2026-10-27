import { initIcon } from "./icon.js";

//the url of the system security update warning outlined svg; resolved relative to this module
const URL_SYSTEMSECURITYUPDATEWARNINGOUTLINED = new URL('../../assets/icons/systemSecurityUpdateWarningOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a system security update warning outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/systemSecurityUpdateWarningOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSystemSecurityUpdateWarningOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'systemSecurityUpdateWarningOutlinedIcon', url: URL_SYSTEMSECURITYUPDATEWARNINGOUTLINED }, ...properties);
}

/**
 * Creates a system security update warning outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const systemSecurityUpdateWarningOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initSystemSecurityUpdateWarningOutlinedIcon(element, ...properties);
    return element;
}
