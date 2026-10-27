import { initIcon } from "./icon.js";

//the url of the replay30 outlined svg; resolved relative to this module
const URL_REPLAY30OUTLINED = new URL('../../assets/icons/replay30Outlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a replay30 outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/replay30Outlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initReplay30OutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'replay30OutlinedIcon', url: URL_REPLAY30OUTLINED }, ...properties);
}

/**
 * Creates a replay30 outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const replay30OutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initReplay30OutlinedIcon(element, ...properties);
    return element;
}
