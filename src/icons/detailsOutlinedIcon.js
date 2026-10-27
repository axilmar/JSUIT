import { initIcon } from "./icon.js";

//the url of the details outlined svg; resolved relative to this module
const URL_DETAILSOUTLINED = new URL('../../assets/icons/detailsOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a details outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/detailsOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initDetailsOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'detailsOutlinedIcon', url: URL_DETAILSOUTLINED }, ...properties);
}

/**
 * Creates a details outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const detailsOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initDetailsOutlinedIcon(element, ...properties);
    return element;
}
