import { initIcon } from "./icon.js";

//the url of the twenty two mp svg; resolved relative to this module
const URL_TWENTYTWOMP = new URL('../../assets/icons/twentyTwoMp.svg', import.meta.url).href;

/**
 * Initializes an icon element as a twenty two mp icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/twentyTwoMp.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initTwentyTwoMpIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'twentyTwoMpIcon', url: URL_TWENTYTWOMP }, ...properties);
}

/**
 * Creates a twenty two mp icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const twentyTwoMpIcon = (...properties) => {
    const element = document.createElement('div');
    initTwentyTwoMpIcon(element, ...properties);
    return element;
}
