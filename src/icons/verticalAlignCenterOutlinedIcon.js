import { initIcon } from "./icon.js";

//the url of the vertical align center outlined svg; resolved relative to this module
const URL_VERTICALALIGNCENTEROUTLINED = new URL('../../assets/icons/verticalAlignCenterOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a vertical align center outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/verticalAlignCenterOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initVerticalAlignCenterOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'verticalAlignCenterOutlinedIcon', url: URL_VERTICALALIGNCENTEROUTLINED }, ...properties);
}

/**
 * Creates a vertical align center outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const verticalAlignCenterOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initVerticalAlignCenterOutlinedIcon(element, ...properties);
    return element;
}
