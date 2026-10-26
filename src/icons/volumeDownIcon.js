import { initIcon } from "./icon.js";

//the url of the volume down svg; resolved relative to this module
const URL_VOLUMEDOWN = new URL('../../assets/icons/volumeDown.svg', import.meta.url).href;

/**
 * Initializes an icon element as a volume down icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/volumeDown.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initVolumeDownIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_VOLUMEDOWN }, ...properties);
}

/**
 * Creates a volume down icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const volumeDownIcon = (...properties) => {
    const element = document.createElement('div');
    initVolumeDownIcon(element, ...properties);
    return element;
}
