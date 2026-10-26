import { initIcon } from "./icon.js";

//the url of the replay5 svg; resolved relative to this module
const URL_REPLAY5 = new URL('../../assets/icons/replay5.svg', import.meta.url).href;

/**
 * Initializes an icon element as a replay5 icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/replay5.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initReplay5Icon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_REPLAY5 }, ...properties);
}

/**
 * Creates a replay5 icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const replay5Icon = (...properties) => {
    const element = document.createElement('div');
    initReplay5Icon(element, ...properties);
    return element;
}
