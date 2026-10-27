import { initIcon } from "./icon.js";

//the url of the article outlined svg; resolved relative to this module
const URL_ARTICLEOUTLINED = new URL('../../assets/icons/articleOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as an article outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/articleOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initArticleOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'articleOutlinedIcon', url: URL_ARTICLEOUTLINED }, ...properties);
}

/**
 * Creates an article outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const articleOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initArticleOutlinedIcon(element, ...properties);
    return element;
}
