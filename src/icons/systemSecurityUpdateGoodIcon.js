import { initIcon } from "./icon.js";

//the url of the system security update good svg; resolved relative to this module
const URL_SYSTEMSECURITYUPDATEGOOD = new URL('../../assets/icons/systemSecurityUpdateGood.svg', import.meta.url).href;

/**
 * Initializes an icon element as a system security update good icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/systemSecurityUpdateGood.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSystemSecurityUpdateGoodIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_SYSTEMSECURITYUPDATEGOOD }, ...properties);
}

/**
 * Creates a system security update good icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const systemSecurityUpdateGoodIcon = (...properties) => {
    const element = document.createElement('div');
    initSystemSecurityUpdateGoodIcon(element, ...properties);
    return element;
}
