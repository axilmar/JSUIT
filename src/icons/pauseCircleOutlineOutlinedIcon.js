import { initIcon } from "./icon.js";

//the url of the pause circle outline outlined svg; resolved relative to this module
const URL_PAUSECIRCLEOUTLINEOUTLINED = new URL('../../assets/icons/pauseCircleOutlineOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a pause circle outline outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/pauseCircleOutlineOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initPauseCircleOutlineOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'pauseCircleOutlineOutlinedIcon', url: URL_PAUSECIRCLEOUTLINEOUTLINED }, ...properties);
}

/**
 * Creates a pause circle outline outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const pauseCircleOutlineOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initPauseCircleOutlineOutlinedIcon(element, ...properties);
    return element;
}
