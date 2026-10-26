import { initIcon } from "./icon.js";

//the url of the translate outlined svg; resolved relative to this module
const URL_TRANSLATEOUTLINED = new URL('../../assets/icons/translateOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a translate outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/translateOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initTranslateOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_TRANSLATEOUTLINED }, ...properties);
}

/**
 * Creates a translate outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const translateOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initTranslateOutlinedIcon(element, ...properties);
    return element;
}
