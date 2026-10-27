import { initIcon } from "./icon.js";

//the url of the play circle filled svg; resolved relative to this module
const URL_PLAYCIRCLEFILLED = new URL('../../assets/icons/playCircleFilled.svg', import.meta.url).href;

/**
 * Initializes an icon element as a play circle filled icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/playCircleFilled.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initPlayCircleFilledIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'playCircleFilledIcon', url: URL_PLAYCIRCLEFILLED }, ...properties);
}

/**
 * Creates a play circle filled icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const playCircleFilledIcon = (...properties) => {
    const element = document.createElement('div');
    initPlayCircleFilledIcon(element, ...properties);
    return element;
}
