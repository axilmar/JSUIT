import { initIcon } from "./icon.js";

//the url of the format indent increase outlined svg; resolved relative to this module
const URL_FORMATINDENTINCREASEOUTLINED = new URL('../../assets/icons/formatIndentIncreaseOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a format indent increase outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/formatIndentIncreaseOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initFormatIndentIncreaseOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_FORMATINDENTINCREASEOUTLINED }, ...properties);
}

/**
 * Creates a format indent increase outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const formatIndentIncreaseOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initFormatIndentIncreaseOutlinedIcon(element, ...properties);
    return element;
}
