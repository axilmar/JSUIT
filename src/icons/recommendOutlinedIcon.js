import { initIcon } from "./icon.js";

//the url of the recommend outlined svg; resolved relative to this module
const URL_RECOMMENDOUTLINED = new URL('../../assets/icons/recommendOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a recommend outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/recommendOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initRecommendOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'recommendOutlinedIcon', url: URL_RECOMMENDOUTLINED }, ...properties);
}

/**
 * Creates a recommend outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const recommendOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initRecommendOutlinedIcon(element, ...properties);
    return element;
}
