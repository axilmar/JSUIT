import { initIcon } from "./icon.js";

//the url of the pause circle filled svg; resolved relative to this module
const URL_PAUSECIRCLEFILLED = new URL('../../assets/icons/pauseCircleFilled.svg', import.meta.url).href;

/**
 * Initializes an icon element as a pause circle filled icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/pauseCircleFilled.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initPauseCircleFilledIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'pauseCircleFilledIcon', url: URL_PAUSECIRCLEFILLED }, ...properties);
}

/**
 * Creates a pause circle filled icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const pauseCircleFilledIcon = (...properties) => {
    const element = document.createElement('div');
    initPauseCircleFilledIcon(element, ...properties);
    return element;
}
