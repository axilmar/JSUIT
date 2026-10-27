import { initIcon } from "./icon.js";

//the url of the border bottom outlined svg; resolved relative to this module
const URL_BORDERBOTTOMOUTLINED = new URL('../../assets/icons/borderBottomOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a border bottom outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/borderBottomOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initBorderBottomOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'borderBottomOutlinedIcon', url: URL_BORDERBOTTOMOUTLINED }, ...properties);
}

/**
 * Creates a border bottom outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const borderBottomOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initBorderBottomOutlinedIcon(element, ...properties);
    return element;
}
