import { initIcon } from "./icon.js";

//the url of the live help outlined svg; resolved relative to this module
const URL_LIVEHELPOUTLINED = new URL('../../assets/icons/liveHelpOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a live help outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/liveHelpOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initLiveHelpOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'liveHelpOutlinedIcon', url: URL_LIVEHELPOUTLINED }, ...properties);
}

/**
 * Creates a live help outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const liveHelpOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initLiveHelpOutlinedIcon(element, ...properties);
    return element;
}
