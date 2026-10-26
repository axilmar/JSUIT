import { initIcon } from "./icon.js";

//the url of the system security update good outlined svg; resolved relative to this module
const URL_SYSTEMSECURITYUPDATEGOODOUTLINED = new URL('../../assets/icons/systemSecurityUpdateGoodOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a system security update good outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/systemSecurityUpdateGoodOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSystemSecurityUpdateGoodOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_SYSTEMSECURITYUPDATEGOODOUTLINED }, ...properties);
}

/**
 * Creates a system security update good outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const systemSecurityUpdateGoodOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initSystemSecurityUpdateGoodOutlinedIcon(element, ...properties);
    return element;
}
