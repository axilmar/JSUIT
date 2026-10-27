import { initIcon } from "./icon.js";

//the url of the repeat one on svg; resolved relative to this module
const URL_REPEATONEON = new URL('../../assets/icons/repeatOneOn.svg', import.meta.url).href;

/**
 * Initializes an icon element as a repeat one on icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/repeatOneOn.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initRepeatOneOnIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'repeatOneOnIcon', url: URL_REPEATONEON }, ...properties);
}

/**
 * Creates a repeat one on icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const repeatOneOnIcon = (...properties) => {
    const element = document.createElement('div');
    initRepeatOneOnIcon(element, ...properties);
    return element;
}
