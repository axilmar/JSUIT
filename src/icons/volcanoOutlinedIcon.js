import { initIcon } from "./icon.js";

//the url of the volcano outlined svg; resolved relative to this module
const URL_VOLCANOOUTLINED = new URL('../../assets/icons/volcanoOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a volcano outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/volcanoOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initVolcanoOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_VOLCANOOUTLINED }, ...properties);
}

/**
 * Creates a volcano outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const volcanoOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initVolcanoOutlinedIcon(element, ...properties);
    return element;
}
