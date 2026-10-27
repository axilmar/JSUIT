import { initIcon } from "./icon.js";

//the url of the takeout dining svg; resolved relative to this module
const URL_TAKEOUTDINING = new URL('../../assets/icons/takeoutDining.svg', import.meta.url).href;

/**
 * Initializes an icon element as a takeout dining icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/takeoutDining.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initTakeoutDiningIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'takeoutDiningIcon', url: URL_TAKEOUTDINING }, ...properties);
}

/**
 * Creates a takeout dining icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const takeoutDiningIcon = (...properties) => {
    const element = document.createElement('div');
    initTakeoutDiningIcon(element, ...properties);
    return element;
}
