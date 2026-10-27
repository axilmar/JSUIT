import { initIcon } from "./icon.js";

//the url of the sync disabled outlined svg; resolved relative to this module
const URL_SYNCDISABLEDOUTLINED = new URL('../../assets/icons/syncDisabledOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a sync disabled outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/syncDisabledOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSyncDisabledOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'syncDisabledOutlinedIcon', url: URL_SYNCDISABLEDOUTLINED }, ...properties);
}

/**
 * Creates a sync disabled outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const syncDisabledOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initSyncDisabledOutlinedIcon(element, ...properties);
    return element;
}
