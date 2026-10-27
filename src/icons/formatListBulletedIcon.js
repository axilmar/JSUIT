import { initIcon } from "./icon.js";

//the url of the format list bulleted svg; resolved relative to this module
const URL_FORMATLISTBULLETED = new URL('../../assets/icons/formatListBulleted.svg', import.meta.url).href;

/**
 * Initializes an icon element as a format list bulleted icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/formatListBulleted.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initFormatListBulletedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'formatListBulletedIcon', url: URL_FORMATLISTBULLETED }, ...properties);
}

/**
 * Creates a format list bulleted icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const formatListBulletedIcon = (...properties) => {
    const element = document.createElement('div');
    initFormatListBulletedIcon(element, ...properties);
    return element;
}
