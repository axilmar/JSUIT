import { initIcon } from "./icon.js";

//the url of the help center outlined svg; resolved relative to this module
const URL_HELPCENTEROUTLINED = new URL('../../assets/icons/helpCenterOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a help center outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/helpCenterOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initHelpCenterOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_HELPCENTEROUTLINED }, ...properties);
}

/**
 * Creates a help center outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const helpCenterOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initHelpCenterOutlinedIcon(element, ...properties);
    return element;
}
