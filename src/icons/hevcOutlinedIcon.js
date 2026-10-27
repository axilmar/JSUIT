import { initIcon } from "./icon.js";

//the url of the hevc outlined svg; resolved relative to this module
const URL_HEVCOUTLINED = new URL('../../assets/icons/hevcOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a hevc outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/hevcOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initHevcOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'hevcOutlinedIcon', url: URL_HEVCOUTLINED }, ...properties);
}

/**
 * Creates a hevc outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const hevcOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initHevcOutlinedIcon(element, ...properties);
    return element;
}
