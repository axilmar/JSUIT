import { initIcon } from "./icon.js";

//the url of the volume up outlined svg; resolved relative to this module
const URL_VOLUMEUPOUTLINED = new URL('../../assets/icons/volumeUpOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a volume up outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/volumeUpOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initVolumeUpOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'volumeUpOutlinedIcon', url: URL_VOLUMEUPOUTLINED }, ...properties);
}

/**
 * Creates a volume up outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const volumeUpOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initVolumeUpOutlinedIcon(element, ...properties);
    return element;
}
