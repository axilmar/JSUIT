import { initIcon } from "./icon.js";

//the url of the volume mute outlined svg; resolved relative to this module
const URL_VOLUMEMUTEOUTLINED = new URL('../../assets/icons/volumeMuteOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a volume mute outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/volumeMuteOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initVolumeMuteOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_VOLUMEMUTEOUTLINED }, ...properties);
}

/**
 * Creates a volume mute outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const volumeMuteOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initVolumeMuteOutlinedIcon(element, ...properties);
    return element;
}
