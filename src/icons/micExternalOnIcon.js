import { initIcon } from "./icon.js";

//the url of the mic external on svg; resolved relative to this module
const URL_MICEXTERNALON = new URL('../../assets/icons/micExternalOn.svg', import.meta.url).href;

/**
 * Initializes an icon element as a mic external on icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/micExternalOn.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initMicExternalOnIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'micExternalOnIcon', url: URL_MICEXTERNALON }, ...properties);
}

/**
 * Creates a mic external on icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const micExternalOnIcon = (...properties) => {
    const element = document.createElement('div');
    initMicExternalOnIcon(element, ...properties);
    return element;
}
