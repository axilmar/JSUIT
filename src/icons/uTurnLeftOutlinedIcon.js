import { initIcon } from "./icon.js";

//the url of the u turn left outlined svg; resolved relative to this module
const URL_UTURNLEFTOUTLINED = new URL('../../assets/icons/uTurnLeftOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as an u turn left outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/uTurnLeftOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initUTurnLeftOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'uTurnLeftOutlinedIcon', url: URL_UTURNLEFTOUTLINED }, ...properties);
}

/**
 * Creates an u turn left outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const uTurnLeftOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initUTurnLeftOutlinedIcon(element, ...properties);
    return element;
}
