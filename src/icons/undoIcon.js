import { initIcon } from "./icon.js";

//the url of the undo svg; resolved relative to this module
const URL_UNDO = new URL('../../assets/icons/undo.svg', import.meta.url).href;

/**
 * Initializes an icon element as an undo icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/undo.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initUndoIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'undoIcon', url: URL_UNDO }, ...properties);
}

/**
 * Creates an undo icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const undoIcon = (...properties) => {
    const element = document.createElement('div');
    initUndoIcon(element, ...properties);
    return element;
}
