import { initIcon } from "./icon.js";

//the url of the slow motion video svg; resolved relative to this module
const URL_SLOWMOTIONVIDEO = new URL('../../assets/icons/slowMotionVideo.svg', import.meta.url).href;

/**
 * Initializes an icon element as a slow motion video icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/slowMotionVideo.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSlowMotionVideoIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'slowMotionVideoIcon', url: URL_SLOWMOTIONVIDEO }, ...properties);
}

/**
 * Creates a slow motion video icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const slowMotionVideoIcon = (...properties) => {
    const element = document.createElement('div');
    initSlowMotionVideoIcon(element, ...properties);
    return element;
}
