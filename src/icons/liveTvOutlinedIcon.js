import { initIcon } from "./icon.js";

//the url of the live tv outlined svg; resolved relative to this module
const URL_LIVETVOUTLINED = new URL('../../assets/icons/liveTvOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a live tv outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/liveTvOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initLiveTvOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'liveTvOutlinedIcon', url: URL_LIVETVOUTLINED }, ...properties);
}

/**
 * Creates a live tv outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const liveTvOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initLiveTvOutlinedIcon(element, ...properties);
    return element;
}
