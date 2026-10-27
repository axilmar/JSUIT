import { initIcon } from "./icon.js";

//the url of the thumb down off alt svg; resolved relative to this module
const URL_THUMBDOWNOFFALT = new URL('../../assets/icons/thumbDownOffAlt.svg', import.meta.url).href;

/**
 * Initializes an icon element as a thumb down off alt icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/thumbDownOffAlt.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initThumbDownOffAltIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'thumbDownOffAltIcon', url: URL_THUMBDOWNOFFALT }, ...properties);
}

/**
 * Creates a thumb down off alt icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const thumbDownOffAltIcon = (...properties) => {
    const element = document.createElement('div');
    initThumbDownOffAltIcon(element, ...properties);
    return element;
}
