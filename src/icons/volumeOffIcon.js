import { initIcon } from "./icon.js";

//the url of the volume off svg; resolved relative to this module
const URL_VOLUMEOFF = new URL('../../assets/icons/volumeOff.svg', import.meta.url).href;

/**
 * Initializes an icon element as a volume off icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/volumeOff.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initVolumeOffIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'volumeOffIcon', url: URL_VOLUMEOFF }, ...properties);
}

/**
 * Creates a volume off icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const volumeOffIcon = (...properties) => {
    const element = document.createElement('div');
    initVolumeOffIcon(element, ...properties);
    return element;
}
