import { initIcon } from "./icon.js";

//the url of the tips and updates outlined svg; resolved relative to this module
const URL_TIPSANDUPDATESOUTLINED = new URL('../../assets/icons/tipsAndUpdatesOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a tips and updates outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/tipsAndUpdatesOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initTipsAndUpdatesOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'tipsAndUpdatesOutlinedIcon', url: URL_TIPSANDUPDATESOUTLINED }, ...properties);
}

/**
 * Creates a tips and updates outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const tipsAndUpdatesOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initTipsAndUpdatesOutlinedIcon(element, ...properties);
    return element;
}
