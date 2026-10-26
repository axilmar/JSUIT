import { initIcon } from "./icon.js";

//the url of the refresh outlined svg; resolved relative to this module
const URL_REFRESHOUTLINED = new URL('../../assets/icons/refreshOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a refresh outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/refreshOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initRefreshOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_REFRESHOUTLINED }, ...properties);
}

/**
 * Creates a refresh outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const refreshOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initRefreshOutlinedIcon(element, ...properties);
    return element;
}
