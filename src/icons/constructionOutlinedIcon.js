import { initIcon } from "./icon.js";

//the url of the construction outlined svg; resolved relative to this module
const URL_CONSTRUCTIONOUTLINED = new URL('../../assets/icons/constructionOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a construction outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/constructionOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initConstructionOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'constructionOutlinedIcon', url: URL_CONSTRUCTIONOUTLINED }, ...properties);
}

/**
 * Creates a construction outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const constructionOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initConstructionOutlinedIcon(element, ...properties);
    return element;
}
