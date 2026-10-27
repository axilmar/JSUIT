import { initIcon } from "./icon.js";

//the url of the repeat one on outlined svg; resolved relative to this module
const URL_REPEATONEONOUTLINED = new URL('../../assets/icons/repeatOneOnOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a repeat one on outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/repeatOneOnOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initRepeatOneOnOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'repeatOneOnOutlinedIcon', url: URL_REPEATONEONOUTLINED }, ...properties);
}

/**
 * Creates a repeat one on outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const repeatOneOnOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initRepeatOneOnOutlinedIcon(element, ...properties);
    return element;
}
