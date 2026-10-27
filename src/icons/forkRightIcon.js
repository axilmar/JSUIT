import { initIcon } from "./icon.js";

//the url of the fork right svg; resolved relative to this module
const URL_FORKRIGHT = new URL('../../assets/icons/forkRight.svg', import.meta.url).href;

/**
 * Initializes an icon element as a fork right icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/forkRight.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initForkRightIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'forkRightIcon', url: URL_FORKRIGHT }, ...properties);
}

/**
 * Creates a fork right icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const forkRightIcon = (...properties) => {
    const element = document.createElement('div');
    initForkRightIcon(element, ...properties);
    return element;
}
