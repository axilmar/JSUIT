import { initIcon } from "./icon.js";

//the url of the widgets outlined svg; resolved relative to this module
const URL_WIDGETSOUTLINED = new URL('../../assets/icons/widgetsOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a widgets outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/widgetsOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initWidgetsOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_WIDGETSOUTLINED }, ...properties);
}

/**
 * Creates a widgets outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const widgetsOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initWidgetsOutlinedIcon(element, ...properties);
    return element;
}
