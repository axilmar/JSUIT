import { initIcon } from "./icon.js";

//the url of the animation svg; resolved relative to this module
const URL_ANIMATION = new URL('../../assets/icons/animation.svg', import.meta.url).href;

/**
 * Initializes an icon element as an animation icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/animation.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initAnimationIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_ANIMATION }, ...properties);
}

/**
 * Creates an animation icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const animationIcon = (...properties) => {
    const element = document.createElement('div');
    initAnimationIcon(element, ...properties);
    return element;
}
