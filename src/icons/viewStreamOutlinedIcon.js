import { initIcon } from "./icon.js";

//the url of the view stream outlined svg; resolved relative to this module
const URL_VIEWSTREAMOUTLINED = new URL('../../assets/icons/viewStreamOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a view stream outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/viewStreamOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initViewStreamOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'viewStreamOutlinedIcon', url: URL_VIEWSTREAMOUTLINED }, ...properties);
}

/**
 * Creates a view stream outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const viewStreamOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initViewStreamOutlinedIcon(element, ...properties);
    return element;
}
