import { initIcon } from "./icon.js";

//the url of the border top outlined svg; resolved relative to this module
const URL_BORDERTOPOUTLINED = new URL('../../assets/icons/borderTopOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a border top outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/borderTopOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initBorderTopOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'borderTopOutlinedIcon', url: URL_BORDERTOPOUTLINED }, ...properties);
}

/**
 * Creates a border top outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const borderTopOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initBorderTopOutlinedIcon(element, ...properties);
    return element;
}
