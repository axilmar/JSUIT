import { initIcon } from "./icon.js";

//the url of the queue music outlined svg; resolved relative to this module
const URL_QUEUEMUSICOUTLINED = new URL('../../assets/icons/queueMusicOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a queue music outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/queueMusicOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initQueueMusicOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'queueMusicOutlinedIcon', url: URL_QUEUEMUSICOUTLINED }, ...properties);
}

/**
 * Creates a queue music outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const queueMusicOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initQueueMusicOutlinedIcon(element, ...properties);
    return element;
}
