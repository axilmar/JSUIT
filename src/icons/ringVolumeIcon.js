import { initIcon } from "./icon.js";

//the url of the ring volume svg; resolved relative to this module
const URL_RINGVOLUME = new URL('../../assets/icons/ringVolume.svg', import.meta.url).href;

/**
 * Initializes an icon element as a ring volume icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/ringVolume.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initRingVolumeIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_RINGVOLUME }, ...properties);
}

/**
 * Creates a ring volume icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const ringVolumeIcon = (...properties) => {
    const element = document.createElement('div');
    initRingVolumeIcon(element, ...properties);
    return element;
}
