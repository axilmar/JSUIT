import { initIcon } from "./icon.js";

//the url of the smoke free outlined svg; resolved relative to this module
const URL_SMOKEFREEOUTLINED = new URL('../../assets/icons/smokeFreeOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a smoke free outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/smokeFreeOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSmokeFreeOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_SMOKEFREEOUTLINED }, ...properties);
}

/**
 * Creates a smoke free outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const smokeFreeOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initSmokeFreeOutlinedIcon(element, ...properties);
    return element;
}
