import { initIcon } from "./icon.js";

//the url of the developer mode svg; resolved relative to this module
const URL_DEVELOPERMODE = new URL('../../assets/icons/developerMode.svg', import.meta.url).href;

/**
 * Initializes an icon element as a developer mode icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/developerMode.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initDeveloperModeIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'developerModeIcon', url: URL_DEVELOPERMODE }, ...properties);
}

/**
 * Creates a developer mode icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const developerModeIcon = (...properties) => {
    const element = document.createElement('div');
    initDeveloperModeIcon(element, ...properties);
    return element;
}
