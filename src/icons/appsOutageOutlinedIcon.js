import { initIcon } from "./icon.js";

//the url of the apps outage outlined svg; resolved relative to this module
const URL_APPSOUTAGEOUTLINED = new URL('../../assets/icons/appsOutageOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as an apps outage outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/appsOutageOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initAppsOutageOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_APPSOUTAGEOUTLINED }, ...properties);
}

/**
 * Creates an apps outage outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const appsOutageOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initAppsOutageOutlinedIcon(element, ...properties);
    return element;
}
