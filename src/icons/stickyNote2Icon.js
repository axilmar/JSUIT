import { initIcon } from "./icon.js";

//the url of the sticky note2 svg; resolved relative to this module
const URL_STICKYNOTE2 = new URL('../../assets/icons/stickyNote2.svg', import.meta.url).href;

/**
 * Initializes an icon element as a sticky note2 icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/stickyNote2.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initStickyNote2Icon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'stickyNote2Icon', url: URL_STICKYNOTE2 }, ...properties);
}

/**
 * Creates a sticky note2 icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const stickyNote2Icon = (...properties) => {
    const element = document.createElement('div');
    initStickyNote2Icon(element, ...properties);
    return element;
}
