import { initIcon } from "./icon.js";

//the url of the local activity svg; resolved relative to this module
const URL_LOCALACTIVITY = new URL('../../assets/icons/localActivity.svg', import.meta.url).href;

/**
 * Initializes an icon element as a local activity icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/localActivity.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initLocalActivityIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'localActivityIcon', url: URL_LOCALACTIVITY }, ...properties);
}

/**
 * Creates a local activity icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const localActivityIcon = (...properties) => {
    const element = document.createElement('div');
    initLocalActivityIcon(element, ...properties);
    return element;
}
