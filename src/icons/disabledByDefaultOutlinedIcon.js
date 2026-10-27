import { initIcon } from "./icon.js";

//the url of the disabled by default outlined svg; resolved relative to this module
const URL_DISABLEDBYDEFAULTOUTLINED = new URL('../../assets/icons/disabledByDefaultOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a disabled by default outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/disabledByDefaultOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initDisabledByDefaultOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'disabledByDefaultOutlinedIcon', url: URL_DISABLEDBYDEFAULTOUTLINED }, ...properties);
}

/**
 * Creates a disabled by default outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const disabledByDefaultOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initDisabledByDefaultOutlinedIcon(element, ...properties);
    return element;
}
