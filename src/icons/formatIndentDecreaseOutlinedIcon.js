import { initIcon } from "./icon.js";

//the url of the format indent decrease outlined svg; resolved relative to this module
const URL_FORMATINDENTDECREASEOUTLINED = new URL('../../assets/icons/formatIndentDecreaseOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a format indent decrease outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/formatIndentDecreaseOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initFormatIndentDecreaseOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'formatIndentDecreaseOutlinedIcon', url: URL_FORMATINDENTDECREASEOUTLINED }, ...properties);
}

/**
 * Creates a format indent decrease outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const formatIndentDecreaseOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initFormatIndentDecreaseOutlinedIcon(element, ...properties);
    return element;
}
