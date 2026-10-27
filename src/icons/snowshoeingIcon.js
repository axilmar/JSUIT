import { initIcon } from "./icon.js";

//the url of the snowshoeing svg; resolved relative to this module
const URL_SNOWSHOEING = new URL('../../assets/icons/snowshoeing.svg', import.meta.url).href;

/**
 * Initializes an icon element as a snowshoeing icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/snowshoeing.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSnowshoeingIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'snowshoeingIcon', url: URL_SNOWSHOEING }, ...properties);
}

/**
 * Creates a snowshoeing icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const snowshoeingIcon = (...properties) => {
    const element = document.createElement('div');
    initSnowshoeingIcon(element, ...properties);
    return element;
}
