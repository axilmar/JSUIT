import { initIcon } from "./icon.js";

//the url of the tap and play svg; resolved relative to this module
const URL_TAPANDPLAY = new URL('../../assets/icons/tapAndPlay.svg', import.meta.url).href;

/**
 * Initializes an icon element as a tap and play icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/tapAndPlay.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initTapAndPlayIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_TAPANDPLAY }, ...properties);
}

/**
 * Creates a tap and play icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const tapAndPlayIcon = (...properties) => {
    const element = document.createElement('div');
    initTapAndPlayIcon(element, ...properties);
    return element;
}
