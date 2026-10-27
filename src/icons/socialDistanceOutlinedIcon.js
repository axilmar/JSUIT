import { initIcon } from "./icon.js";

//the url of the social distance outlined svg; resolved relative to this module
const URL_SOCIALDISTANCEOUTLINED = new URL('../../assets/icons/socialDistanceOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a social distance outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/socialDistanceOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSocialDistanceOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'socialDistanceOutlinedIcon', url: URL_SOCIALDISTANCEOUTLINED }, ...properties);
}

/**
 * Creates a social distance outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const socialDistanceOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initSocialDistanceOutlinedIcon(element, ...properties);
    return element;
}
