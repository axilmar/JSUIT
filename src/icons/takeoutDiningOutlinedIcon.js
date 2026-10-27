import { initIcon } from "./icon.js";

//the url of the takeout dining outlined svg; resolved relative to this module
const URL_TAKEOUTDININGOUTLINED = new URL('../../assets/icons/takeoutDiningOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a takeout dining outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/takeoutDiningOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initTakeoutDiningOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'takeoutDiningOutlinedIcon', url: URL_TAKEOUTDININGOUTLINED }, ...properties);
}

/**
 * Creates a takeout dining outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const takeoutDiningOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initTakeoutDiningOutlinedIcon(element, ...properties);
    return element;
}
