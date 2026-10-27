import { initIcon } from "./icon.js";

//the url of the toggle on outlined svg; resolved relative to this module
const URL_TOGGLEONOUTLINED = new URL('../../assets/icons/toggleOnOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a toggle on outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/toggleOnOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initToggleOnOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'toggleOnOutlinedIcon', url: URL_TOGGLEONOUTLINED }, ...properties);
}

/**
 * Creates a toggle on outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const toggleOnOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initToggleOnOutlinedIcon(element, ...properties);
    return element;
}
