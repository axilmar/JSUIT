import { initIcon } from "./icon.js";

//the url of the brunch dining outlined svg; resolved relative to this module
const URL_BRUNCHDININGOUTLINED = new URL('../../assets/icons/brunchDiningOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a brunch dining outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/brunchDiningOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initBrunchDiningOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'brunchDiningOutlinedIcon', url: URL_BRUNCHDININGOUTLINED }, ...properties);
}

/**
 * Creates a brunch dining outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const brunchDiningOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initBrunchDiningOutlinedIcon(element, ...properties);
    return element;
}
