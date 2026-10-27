import { initIcon } from "./icon.js";

//the url of the sync alt outlined svg; resolved relative to this module
const URL_SYNCALTOUTLINED = new URL('../../assets/icons/syncAltOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a sync alt outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/syncAltOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSyncAltOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'syncAltOutlinedIcon', url: URL_SYNCALTOUTLINED }, ...properties);
}

/**
 * Creates a sync alt outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const syncAltOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initSyncAltOutlinedIcon(element, ...properties);
    return element;
}
