import { initIcon } from "./icon.js";

//the url of the breakfast dining outlined svg; resolved relative to this module
const URL_BREAKFASTDININGOUTLINED = new URL('../../assets/icons/breakfastDiningOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a breakfast dining outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/breakfastDiningOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initBreakfastDiningOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'breakfastDiningOutlinedIcon', url: URL_BREAKFASTDININGOUTLINED }, ...properties);
}

/**
 * Creates a breakfast dining outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const breakfastDiningOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initBreakfastDiningOutlinedIcon(element, ...properties);
    return element;
}
