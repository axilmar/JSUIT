import { initIcon } from "./icon.js";

//the url of the door front outlined svg; resolved relative to this module
const URL_DOORFRONTOUTLINED = new URL('../../assets/icons/doorFrontOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a door front outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/doorFrontOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initDoorFrontOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_DOORFRONTOUTLINED }, ...properties);
}

/**
 * Creates a door front outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const doorFrontOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initDoorFrontOutlinedIcon(element, ...properties);
    return element;
}
