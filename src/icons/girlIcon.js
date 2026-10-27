import { initIcon } from "./icon.js";

//the url of the girl svg; resolved relative to this module
const URL_GIRL = new URL('../../assets/icons/girl.svg', import.meta.url).href;

/**
 * Initializes an icon element as a girl icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/girl.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initGirlIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'girlIcon', url: URL_GIRL }, ...properties);
}

/**
 * Creates a girl icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const girlIcon = (...properties) => {
    const element = document.createElement('div');
    initGirlIcon(element, ...properties);
    return element;
}
