import { initIcon } from "./icon.js";

//the url of the wb auto outlined svg; resolved relative to this module
const URL_WBAUTOOUTLINED = new URL('../../assets/icons/wbAutoOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a wb auto outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/wbAutoOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initWbAutoOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'wbAutoOutlinedIcon', url: URL_WBAUTOOUTLINED }, ...properties);
}

/**
 * Creates a wb auto outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const wbAutoOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initWbAutoOutlinedIcon(element, ...properties);
    return element;
}
