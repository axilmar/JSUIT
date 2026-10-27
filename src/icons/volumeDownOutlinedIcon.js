import { initIcon } from "./icon.js";

//the url of the volume down outlined svg; resolved relative to this module
const URL_VOLUMEDOWNOUTLINED = new URL('../../assets/icons/volumeDownOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a volume down outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/volumeDownOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initVolumeDownOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'volumeDownOutlinedIcon', url: URL_VOLUMEDOWNOUTLINED }, ...properties);
}

/**
 * Creates a volume down outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const volumeDownOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initVolumeDownOutlinedIcon(element, ...properties);
    return element;
}
