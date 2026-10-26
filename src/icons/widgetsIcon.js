import { initIcon } from "./icon.js";

//the url of the widgets svg; resolved relative to this module
const URL_WIDGETS = new URL('../../assets/icons/widgets.svg', import.meta.url).href;

/**
 * Initializes an icon element as a widgets icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/widgets.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initWidgetsIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_WIDGETS }, ...properties);
}

/**
 * Creates a widgets icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const widgetsIcon = (...properties) => {
    const element = document.createElement('div');
    initWidgetsIcon(element, ...properties);
    return element;
}
