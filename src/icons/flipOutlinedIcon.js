import { initIcon } from "./icon.js";

//the url of the flip outlined svg; resolved relative to this module
const URL_FLIPOUTLINED = new URL('../../assets/icons/flipOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a flip outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/flipOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initFlipOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'flipOutlinedIcon', url: URL_FLIPOUTLINED }, ...properties);
}

/**
 * Creates a flip outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const flipOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initFlipOutlinedIcon(element, ...properties);
    return element;
}
