import { initIcon } from "./icon.js";

//the url of the snowmobile outlined svg; resolved relative to this module
const URL_SNOWMOBILEOUTLINED = new URL('../../assets/icons/snowmobileOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a snowmobile outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/snowmobileOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSnowmobileOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_SNOWMOBILEOUTLINED }, ...properties);
}

/**
 * Creates a snowmobile outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const snowmobileOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initSnowmobileOutlinedIcon(element, ...properties);
    return element;
}
