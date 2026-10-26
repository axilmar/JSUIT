import { initIcon } from "./icon.js";

//the url of the slow motion video outlined svg; resolved relative to this module
const URL_SLOWMOTIONVIDEOOUTLINED = new URL('../../assets/icons/slowMotionVideoOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a slow motion video outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/slowMotionVideoOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSlowMotionVideoOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_SLOWMOTIONVIDEOOUTLINED }, ...properties);
}

/**
 * Creates a slow motion video outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const slowMotionVideoOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initSlowMotionVideoOutlinedIcon(element, ...properties);
    return element;
}
