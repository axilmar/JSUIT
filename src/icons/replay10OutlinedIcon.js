import { initIcon } from "./icon.js";

//the url of the replay10 outlined svg; resolved relative to this module
const URL_REPLAY10OUTLINED = new URL('../../assets/icons/replay10Outlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a replay10 outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/replay10Outlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initReplay10OutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'replay10OutlinedIcon', url: URL_REPLAY10OUTLINED }, ...properties);
}

/**
 * Creates a replay10 outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const replay10OutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initReplay10OutlinedIcon(element, ...properties);
    return element;
}
