import { initIcon } from "./icon.js";

//the url of the vertical align bottom outlined svg; resolved relative to this module
const URL_VERTICALALIGNBOTTOMOUTLINED = new URL('../../assets/icons/verticalAlignBottomOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a vertical align bottom outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/verticalAlignBottomOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initVerticalAlignBottomOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_VERTICALALIGNBOTTOMOUTLINED }, ...properties);
}

/**
 * Creates a vertical align bottom outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const verticalAlignBottomOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initVerticalAlignBottomOutlinedIcon(element, ...properties);
    return element;
}
