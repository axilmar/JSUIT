import { initIcon } from "./icon.js";

//the url of the ring volume outlined svg; resolved relative to this module
const URL_RINGVOLUMEOUTLINED = new URL('../../assets/icons/ringVolumeOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a ring volume outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/ringVolumeOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initRingVolumeOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'ringVolumeOutlinedIcon', url: URL_RINGVOLUMEOUTLINED }, ...properties);
}

/**
 * Creates a ring volume outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const ringVolumeOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initRingVolumeOutlinedIcon(element, ...properties);
    return element;
}
