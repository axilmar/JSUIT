import { initIcon } from "./icon.js";

//the url of the tap and play outlined svg; resolved relative to this module
const URL_TAPANDPLAYOUTLINED = new URL('../../assets/icons/tapAndPlayOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a tap and play outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/tapAndPlayOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initTapAndPlayOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_TAPANDPLAYOUTLINED }, ...properties);
}

/**
 * Creates a tap and play outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const tapAndPlayOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initTapAndPlayOutlinedIcon(element, ...properties);
    return element;
}
