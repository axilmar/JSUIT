import { initIcon } from "./icon.js";

//the url of the woman2 outlined svg; resolved relative to this module
const URL_WOMAN2OUTLINED = new URL('../../assets/icons/woman2Outlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a woman2 outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/woman2Outlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initWoman2OutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'woman2OutlinedIcon', url: URL_WOMAN2OUTLINED }, ...properties);
}

/**
 * Creates a woman2 outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const woman2OutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initWoman2OutlinedIcon(element, ...properties);
    return element;
}
