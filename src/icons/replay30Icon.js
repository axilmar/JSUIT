import { initIcon } from "./icon.js";

//the url of the replay30 svg; resolved relative to this module
const URL_REPLAY30 = new URL('../../assets/icons/replay30.svg', import.meta.url).href;

/**
 * Initializes an icon element as a replay30 icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/replay30.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initReplay30Icon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'replay30Icon', url: URL_REPLAY30 }, ...properties);
}

/**
 * Creates a replay30 icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const replay30Icon = (...properties) => {
    const element = document.createElement('div');
    initReplay30Icon(element, ...properties);
    return element;
}
