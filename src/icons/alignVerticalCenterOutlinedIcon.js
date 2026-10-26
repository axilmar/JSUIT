import { initIcon } from "./icon.js";

//the url of the align vertical center outlined svg; resolved relative to this module
const URL_ALIGNVERTICALCENTEROUTLINED = new URL('../../assets/icons/alignVerticalCenterOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as an align vertical center outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/alignVerticalCenterOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initAlignVerticalCenterOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_ALIGNVERTICALCENTEROUTLINED }, ...properties);
}

/**
 * Creates an align vertical center outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const alignVerticalCenterOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initAlignVerticalCenterOutlinedIcon(element, ...properties);
    return element;
}
