import { initIcon } from "./icon.js";

//the url of the new releases svg; resolved relative to this module
const URL_NEWRELEASES = new URL('../../assets/icons/newReleases.svg', import.meta.url).href;

/**
 * Initializes an icon element as a new releases icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/newReleases.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initNewReleasesIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_NEWRELEASES }, ...properties);
}

/**
 * Creates a new releases icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const newReleasesIcon = (...properties) => {
    const element = document.createElement('div');
    initNewReleasesIcon(element, ...properties);
    return element;
}
