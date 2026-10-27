import { initIcon } from "./icon.js";

//the url of the wb twilight outlined svg; resolved relative to this module
const URL_WBTWILIGHTOUTLINED = new URL('../../assets/icons/wbTwilightOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a wb twilight outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/wbTwilightOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initWbTwilightOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'wbTwilightOutlinedIcon', url: URL_WBTWILIGHTOUTLINED }, ...properties);
}

/**
 * Creates a wb twilight outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const wbTwilightOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initWbTwilightOutlinedIcon(element, ...properties);
    return element;
}
