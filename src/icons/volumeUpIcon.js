import { initIcon } from "./icon.js";

//the url of the volume up svg; resolved relative to this module
const URL_VOLUMEUP = new URL('../../assets/icons/volumeUp.svg', import.meta.url).href;

/**
 * Initializes an icon element as a volume up icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/volumeUp.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initVolumeUpIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_VOLUMEUP }, ...properties);
}

/**
 * Creates a volume up icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const volumeUpIcon = (...properties) => {
    const element = document.createElement('div');
    initVolumeUpIcon(element, ...properties);
    return element;
}
