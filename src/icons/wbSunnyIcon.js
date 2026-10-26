import { initIcon } from "./icon.js";

//the url of the wb sunny svg; resolved relative to this module
const URL_WBSUNNY = new URL('../../assets/icons/wbSunny.svg', import.meta.url).href;

/**
 * Initializes an icon element as a wb sunny icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/wbSunny.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initWbSunnyIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_WBSUNNY }, ...properties);
}

/**
 * Creates a wb sunny icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const wbSunnyIcon = (...properties) => {
    const element = document.createElement('div');
    initWbSunnyIcon(element, ...properties);
    return element;
}
