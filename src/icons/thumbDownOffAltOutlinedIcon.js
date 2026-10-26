import { initIcon } from "./icon.js";

//the url of the thumb down off alt outlined svg; resolved relative to this module
const URL_THUMBDOWNOFFALTOUTLINED = new URL('../../assets/icons/thumbDownOffAltOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a thumb down off alt outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/thumbDownOffAltOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initThumbDownOffAltOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_THUMBDOWNOFFALTOUTLINED }, ...properties);
}

/**
 * Creates a thumb down off alt outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const thumbDownOffAltOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initThumbDownOffAltOutlinedIcon(element, ...properties);
    return element;
}
