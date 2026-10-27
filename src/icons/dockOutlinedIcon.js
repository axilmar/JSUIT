import { initIcon } from "./icon.js";

//the url of the dock outlined svg; resolved relative to this module
const URL_DOCKOUTLINED = new URL('../../assets/icons/dockOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a dock outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/dockOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initDockOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'dockOutlinedIcon', url: URL_DOCKOUTLINED }, ...properties);
}

/**
 * Creates a dock outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const dockOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initDockOutlinedIcon(element, ...properties);
    return element;
}
