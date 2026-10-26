import { initIcon } from "./icon.js";

//the url of the dock svg; resolved relative to this module
const URL_DOCK = new URL('../../assets/icons/dock.svg', import.meta.url).href;

/**
 * Initializes an icon element as a dock icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/dock.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initDockIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_DOCK }, ...properties);
}

/**
 * Creates a dock icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const dockIcon = (...properties) => {
    const element = document.createElement('div');
    initDockIcon(element, ...properties);
    return element;
}
