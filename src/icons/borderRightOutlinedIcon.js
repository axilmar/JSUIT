import { initIcon } from "./icon.js";

//the url of the border right outlined svg; resolved relative to this module
const URL_BORDERRIGHTOUTLINED = new URL('../../assets/icons/borderRightOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a border right outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/borderRightOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initBorderRightOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'borderRightOutlinedIcon', url: URL_BORDERRIGHTOUTLINED }, ...properties);
}

/**
 * Creates a border right outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const borderRightOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initBorderRightOutlinedIcon(element, ...properties);
    return element;
}
