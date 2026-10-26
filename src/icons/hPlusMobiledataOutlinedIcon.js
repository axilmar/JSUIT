import { initIcon } from "./icon.js";

//the url of the h plus mobiledata outlined svg; resolved relative to this module
const URL_HPLUSMOBILEDATAOUTLINED = new URL('../../assets/icons/hPlusMobiledataOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a h plus mobiledata outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/hPlusMobiledataOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initHPlusMobiledataOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_HPLUSMOBILEDATAOUTLINED }, ...properties);
}

/**
 * Creates a h plus mobiledata outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const hPlusMobiledataOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initHPlusMobiledataOutlinedIcon(element, ...properties);
    return element;
}
