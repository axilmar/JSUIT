import { initIcon } from "./icon.js";

//the url of the volume mute svg; resolved relative to this module
const URL_VOLUMEMUTE = new URL('../../assets/icons/volumeMute.svg', import.meta.url).href;

/**
 * Initializes an icon element as a volume mute icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/volumeMute.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initVolumeMuteIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_VOLUMEMUTE }, ...properties);
}

/**
 * Creates a volume mute icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const volumeMuteIcon = (...properties) => {
    const element = document.createElement('div');
    initVolumeMuteIcon(element, ...properties);
    return element;
}
