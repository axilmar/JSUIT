import { initIcon } from "./icon.js";

//the url of the waving hand outlined svg; resolved relative to this module
const URL_WAVINGHANDOUTLINED = new URL('../../assets/icons/wavingHandOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a waving hand outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/wavingHandOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initWavingHandOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_WAVINGHANDOUTLINED }, ...properties);
}

/**
 * Creates a waving hand outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const wavingHandOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initWavingHandOutlinedIcon(element, ...properties);
    return element;
}
