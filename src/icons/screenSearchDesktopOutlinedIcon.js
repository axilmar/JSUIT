import { initIcon } from "./icon.js";

//the url of the screen search desktop outlined svg; resolved relative to this module
const URL_SCREENSEARCHDESKTOPOUTLINED = new URL('../../assets/icons/screenSearchDesktopOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a screen search desktop outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/screenSearchDesktopOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initScreenSearchDesktopOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'screenSearchDesktopOutlinedIcon', url: URL_SCREENSEARCHDESKTOPOUTLINED }, ...properties);
}

/**
 * Creates a screen search desktop outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const screenSearchDesktopOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initScreenSearchDesktopOutlinedIcon(element, ...properties);
    return element;
}
