import { initIcon } from "./icon.js";

//the url of the free breakfast outlined svg; resolved relative to this module
const URL_FREEBREAKFASTOUTLINED = new URL('../../assets/icons/freeBreakfastOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a free breakfast outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/freeBreakfastOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initFreeBreakfastOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'freeBreakfastOutlinedIcon', url: URL_FREEBREAKFASTOUTLINED }, ...properties);
}

/**
 * Creates a free breakfast outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const freeBreakfastOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initFreeBreakfastOutlinedIcon(element, ...properties);
    return element;
}
