import { initIcon } from "./icon.js";

//the url of the navigate before outlined svg; resolved relative to this module
const URL_NAVIGATEBEFOREOUTLINED = new URL('../../assets/icons/navigateBeforeOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a navigate before outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/navigateBeforeOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initNavigateBeforeOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'navigateBeforeOutlinedIcon', url: URL_NAVIGATEBEFOREOUTLINED }, ...properties);
}

/**
 * Creates a navigate before outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const navigateBeforeOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initNavigateBeforeOutlinedIcon(element, ...properties);
    return element;
}
