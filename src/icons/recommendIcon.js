import { initIcon } from "./icon.js";

//the url of the recommend svg; resolved relative to this module
const URL_RECOMMEND = new URL('../../assets/icons/recommend.svg', import.meta.url).href;

/**
 * Initializes an icon element as a recommend icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/recommend.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initRecommendIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'recommendIcon', url: URL_RECOMMEND }, ...properties);
}

/**
 * Creates a recommend icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const recommendIcon = (...properties) => {
    const element = document.createElement('div');
    initRecommendIcon(element, ...properties);
    return element;
}
