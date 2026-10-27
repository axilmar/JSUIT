import { initIcon } from "./icon.js";

//the url of the battery saver outlined svg; resolved relative to this module
const URL_BATTERYSAVEROUTLINED = new URL('../../assets/icons/batterySaverOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a battery saver outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/batterySaverOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initBatterySaverOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'batterySaverOutlinedIcon', url: URL_BATTERYSAVEROUTLINED }, ...properties);
}

/**
 * Creates a battery saver outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const batterySaverOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initBatterySaverOutlinedIcon(element, ...properties);
    return element;
}
