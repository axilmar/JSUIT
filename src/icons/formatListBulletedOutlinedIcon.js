import { initIcon } from "./icon.js";

//the url of the format list bulleted outlined svg; resolved relative to this module
const URL_FORMATLISTBULLETEDOUTLINED = new URL('../../assets/icons/formatListBulletedOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a format list bulleted outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/formatListBulletedOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initFormatListBulletedOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_FORMATLISTBULLETEDOUTLINED }, ...properties);
}

/**
 * Creates a format list bulleted outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const formatListBulletedOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initFormatListBulletedOutlinedIcon(element, ...properties);
    return element;
}
