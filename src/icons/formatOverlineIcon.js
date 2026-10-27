import { initIcon } from "./icon.js";

//the url of the format overline svg; resolved relative to this module
const URL_FORMATOVERLINE = new URL('../../assets/icons/formatOverline.svg', import.meta.url).href;

/**
 * Initializes an icon element as a format overline icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/formatOverline.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initFormatOverlineIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'formatOverlineIcon', url: URL_FORMATOVERLINE }, ...properties);
}

/**
 * Creates a format overline icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const formatOverlineIcon = (...properties) => {
    const element = document.createElement('div');
    initFormatOverlineIcon(element, ...properties);
    return element;
}
