import { initIcon } from "./icon.js";

//the url of the sticky note2 outlined svg; resolved relative to this module
const URL_STICKYNOTE2OUTLINED = new URL('../../assets/icons/stickyNote2Outlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a sticky note2 outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/stickyNote2Outlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initStickyNote2OutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'stickyNote2OutlinedIcon', url: URL_STICKYNOTE2OUTLINED }, ...properties);
}

/**
 * Creates a sticky note2 outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const stickyNote2OutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initStickyNote2OutlinedIcon(element, ...properties);
    return element;
}
