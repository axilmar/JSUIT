import { initIcon } from "./icon.js";

//the url of the pause circle outlined svg; resolved relative to this module
const URL_PAUSECIRCLEOUTLINED = new URL('../../assets/icons/pauseCircleOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a pause circle outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/pauseCircleOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initPauseCircleOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'pauseCircleOutlinedIcon', url: URL_PAUSECIRCLEOUTLINED }, ...properties);
}

/**
 * Creates a pause circle outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const pauseCircleOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initPauseCircleOutlinedIcon(element, ...properties);
    return element;
}
