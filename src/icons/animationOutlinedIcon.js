import { initIcon } from "./icon.js";

//the url of the animation outlined svg; resolved relative to this module
const URL_ANIMATIONOUTLINED = new URL('../../assets/icons/animationOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as an animation outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/animationOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initAnimationOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'animationOutlinedIcon', url: URL_ANIMATIONOUTLINED }, ...properties);
}

/**
 * Creates an animation outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const animationOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initAnimationOutlinedIcon(element, ...properties);
    return element;
}
