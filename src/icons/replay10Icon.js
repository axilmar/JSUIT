import { initIcon } from "./icon.js";

//the url of the replay10 svg; resolved relative to this module
const URL_REPLAY10 = new URL('../../assets/icons/replay10.svg', import.meta.url).href;

/**
 * Initializes an icon element as a replay10 icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/replay10.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initReplay10Icon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_REPLAY10 }, ...properties);
}

/**
 * Creates a replay10 icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const replay10Icon = (...properties) => {
    const element = document.createElement('div');
    initReplay10Icon(element, ...properties);
    return element;
}
