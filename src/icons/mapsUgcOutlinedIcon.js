import { initIcon } from "./icon.js";

//the url of the maps ugc outlined svg; resolved relative to this module
const URL_MAPSUGCOUTLINED = new URL('../../assets/icons/mapsUgcOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a maps ugc outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/mapsUgcOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initMapsUgcOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'mapsUgcOutlinedIcon', url: URL_MAPSUGCOUTLINED }, ...properties);
}

/**
 * Creates a maps ugc outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const mapsUgcOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initMapsUgcOutlinedIcon(element, ...properties);
    return element;
}
