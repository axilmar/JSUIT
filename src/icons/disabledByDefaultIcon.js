import { initIcon } from "./icon.js";

//the url of the disabled by default svg; resolved relative to this module
const URL_DISABLEDBYDEFAULT = new URL('../../assets/icons/disabledByDefault.svg', import.meta.url).href;

/**
 * Initializes an icon element as a disabled by default icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/disabledByDefault.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initDisabledByDefaultIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'disabledByDefaultIcon', url: URL_DISABLEDBYDEFAULT }, ...properties);
}

/**
 * Creates a disabled by default icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const disabledByDefaultIcon = (...properties) => {
    const element = document.createElement('div');
    initDisabledByDefaultIcon(element, ...properties);
    return element;
}
