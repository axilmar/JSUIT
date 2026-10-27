import { initIcon } from "./icon.js";

//the url of the restore from trash outlined svg; resolved relative to this module
const URL_RESTOREFROMTRASHOUTLINED = new URL('../../assets/icons/restoreFromTrashOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a restore from trash outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/restoreFromTrashOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initRestoreFromTrashOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'restoreFromTrashOutlinedIcon', url: URL_RESTOREFROMTRASHOUTLINED }, ...properties);
}

/**
 * Creates a restore from trash outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const restoreFromTrashOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initRestoreFromTrashOutlinedIcon(element, ...properties);
    return element;
}
