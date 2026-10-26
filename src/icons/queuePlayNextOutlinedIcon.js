import { initIcon } from "./icon.js";

//the url of the queue play next outlined svg; resolved relative to this module
const URL_QUEUEPLAYNEXTOUTLINED = new URL('../../assets/icons/queuePlayNextOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a queue play next outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/queuePlayNextOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initQueuePlayNextOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_QUEUEPLAYNEXTOUTLINED }, ...properties);
}

/**
 * Creates a queue play next outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const queuePlayNextOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initQueuePlayNextOutlinedIcon(element, ...properties);
    return element;
}
