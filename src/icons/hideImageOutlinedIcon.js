import { initIcon } from "./icon.js";

//the url of the hide image outlined svg; resolved relative to this module
const URL_HIDEIMAGEOUTLINED = new URL('../../assets/icons/hideImageOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a hide image outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/hideImageOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initHideImageOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'hideImageOutlinedIcon', url: URL_HIDEIMAGEOUTLINED }, ...properties);
}

/**
 * Creates a hide image outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const hideImageOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initHideImageOutlinedIcon(element, ...properties);
    return element;
}
