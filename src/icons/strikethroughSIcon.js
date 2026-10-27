import { initIcon } from "./icon.js";

//the url of the strikethrough s svg; resolved relative to this module
const URL_STRIKETHROUGHS = new URL('../../assets/icons/strikethroughS.svg', import.meta.url).href;

/**
 * Initializes an icon element as a strikethrough s icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/strikethroughS.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initStrikethroughSIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'strikethroughSIcon', url: URL_STRIKETHROUGHS }, ...properties);
}

/**
 * Creates a strikethrough s icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const strikethroughSIcon = (...properties) => {
    const element = document.createElement('div');
    initStrikethroughSIcon(element, ...properties);
    return element;
}
