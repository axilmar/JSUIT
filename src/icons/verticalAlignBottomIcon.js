import { initIcon } from "./icon.js";

//the url of the vertical align bottom svg; resolved relative to this module
const URL_VERTICALALIGNBOTTOM = new URL('../../assets/icons/verticalAlignBottom.svg', import.meta.url).href;

/**
 * Initializes an icon element as a vertical align bottom icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/verticalAlignBottom.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initVerticalAlignBottomIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'verticalAlignBottomIcon', url: URL_VERTICALALIGNBOTTOM }, ...properties);
}

/**
 * Creates a vertical align bottom icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const verticalAlignBottomIcon = (...properties) => {
    const element = document.createElement('div');
    initVerticalAlignBottomIcon(element, ...properties);
    return element;
}
