import { initIcon } from "./icon.js";

//the url of the apps outlined svg; resolved relative to this module
const URL_APPSOUTLINED = new URL('../../assets/icons/appsOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as an apps outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/appsOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initAppsOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_APPSOUTLINED }, ...properties);
}

/**
 * Creates an apps outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const appsOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initAppsOutlinedIcon(element, ...properties);
    return element;
}
