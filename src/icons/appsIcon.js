import { initIcon } from "./icon.js";

//the url of the apps svg; resolved relative to this module
const URL_APPS = new URL('../../assets/icons/apps.svg', import.meta.url).href;

/**
 * Initializes an icon element as an apps icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/apps.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initAppsIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'appsIcon', url: URL_APPS }, ...properties);
}

/**
 * Creates an apps icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const appsIcon = (...properties) => {
    const element = document.createElement('div');
    initAppsIcon(element, ...properties);
    return element;
}
