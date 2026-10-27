import { initIcon } from "./icon.js";

//the url of the apps outage svg; resolved relative to this module
const URL_APPSOUTAGE = new URL('../../assets/icons/appsOutage.svg', import.meta.url).href;

/**
 * Initializes an icon element as an apps outage icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/appsOutage.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initAppsOutageIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'appsOutageIcon', url: URL_APPSOUTAGE }, ...properties);
}

/**
 * Creates an apps outage icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const appsOutageIcon = (...properties) => {
    const element = document.createElement('div');
    initAppsOutageIcon(element, ...properties);
    return element;
}
