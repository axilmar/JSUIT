import { initIcon } from "./icon.js";

//the url of the brush outlined svg; resolved relative to this module
const URL_BRUSHOUTLINED = new URL('../../assets/icons/brushOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a brush outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/brushOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initBrushOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'brushOutlinedIcon', url: URL_BRUSHOUTLINED }, ...properties);
}

/**
 * Creates a brush outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const brushOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initBrushOutlinedIcon(element, ...properties);
    return element;
}
