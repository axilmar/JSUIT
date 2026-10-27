import { initIcon } from "./icon.js";

//the url of the sync outlined svg; resolved relative to this module
const URL_SYNCOUTLINED = new URL('../../assets/icons/syncOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a sync outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/syncOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSyncOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'syncOutlinedIcon', url: URL_SYNCOUTLINED }, ...properties);
}

/**
 * Creates a sync outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const syncOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initSyncOutlinedIcon(element, ...properties);
    return element;
}
