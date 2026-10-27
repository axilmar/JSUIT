import { initIcon } from "./icon.js";

//the url of the wifi find outlined svg; resolved relative to this module
const URL_WIFIFINDOUTLINED = new URL('../../assets/icons/wifiFindOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a wifi find outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/wifiFindOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initWifiFindOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'wifiFindOutlinedIcon', url: URL_WIFIFINDOUTLINED }, ...properties);
}

/**
 * Creates a wifi find outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const wifiFindOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initWifiFindOutlinedIcon(element, ...properties);
    return element;
}
