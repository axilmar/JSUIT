import { initIcon } from "./icon.js";

//the url of the volume off outlined svg; resolved relative to this module
const URL_VOLUMEOFFOUTLINED = new URL('../../assets/icons/volumeOffOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a volume off outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/volumeOffOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initVolumeOffOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_VOLUMEOFFOUTLINED }, ...properties);
}

/**
 * Creates a volume off outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const volumeOffOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initVolumeOffOutlinedIcon(element, ...properties);
    return element;
}
