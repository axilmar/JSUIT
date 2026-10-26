import { initIcon } from "./icon.js";

//the url of the align vertical bottom svg; resolved relative to this module
const URL_ALIGNVERTICALBOTTOM = new URL('../../assets/icons/alignVerticalBottom.svg', import.meta.url).href;

/**
 * Initializes an icon element as an align vertical bottom icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/alignVerticalBottom.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initAlignVerticalBottomIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_ALIGNVERTICALBOTTOM }, ...properties);
}

/**
 * Creates an align vertical bottom icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const alignVerticalBottomIcon = (...properties) => {
    const element = document.createElement('div');
    initAlignVerticalBottomIcon(element, ...properties);
    return element;
}
