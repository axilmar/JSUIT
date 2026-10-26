import { initIcon } from "./icon.js";

//the url of the lock open outlined svg; resolved relative to this module
const URL_LOCKOPENOUTLINED = new URL('../../assets/icons/lockOpenOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a lock open outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/lockOpenOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initLockOpenOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_LOCKOPENOUTLINED }, ...properties);
}

/**
 * Creates a lock open outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const lockOpenOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initLockOpenOutlinedIcon(element, ...properties);
    return element;
}
