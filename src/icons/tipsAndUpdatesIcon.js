import { initIcon } from "./icon.js";

//the url of the tips and updates svg; resolved relative to this module
const URL_TIPSANDUPDATES = new URL('../../assets/icons/tipsAndUpdates.svg', import.meta.url).href;

/**
 * Initializes an icon element as a tips and updates icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/tipsAndUpdates.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initTipsAndUpdatesIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'tipsAndUpdatesIcon', url: URL_TIPSANDUPDATES }, ...properties);
}

/**
 * Creates a tips and updates icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const tipsAndUpdatesIcon = (...properties) => {
    const element = document.createElement('div');
    initTipsAndUpdatesIcon(element, ...properties);
    return element;
}
