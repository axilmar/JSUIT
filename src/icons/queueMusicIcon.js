import { initIcon } from "./icon.js";

//the url of the queue music svg; resolved relative to this module
const URL_QUEUEMUSIC = new URL('../../assets/icons/queueMusic.svg', import.meta.url).href;

/**
 * Initializes an icon element as a queue music icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/queueMusic.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initQueueMusicIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'queueMusicIcon', url: URL_QUEUEMUSIC }, ...properties);
}

/**
 * Creates a queue music icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const queueMusicIcon = (...properties) => {
    const element = document.createElement('div');
    initQueueMusicIcon(element, ...properties);
    return element;
}
