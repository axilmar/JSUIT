import { initIcon } from "./icon.js";

//the url of the wb shade outlined svg; resolved relative to this module
const URL_WBSHADEOUTLINED = new URL('../../assets/icons/wbShadeOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a wb shade outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/wbShadeOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initWbShadeOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'wbShadeOutlinedIcon', url: URL_WBSHADEOUTLINED }, ...properties);
}

/**
 * Creates a wb shade outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const wbShadeOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initWbShadeOutlinedIcon(element, ...properties);
    return element;
}
