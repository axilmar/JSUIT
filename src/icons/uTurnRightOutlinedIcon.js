import { initIcon } from "./icon.js";

//the url of the u turn right outlined svg; resolved relative to this module
const URL_UTURNRIGHTOUTLINED = new URL('../../assets/icons/uTurnRightOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as an u turn right outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/uTurnRightOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initUTurnRightOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'uTurnRightOutlinedIcon', url: URL_UTURNRIGHTOUTLINED }, ...properties);
}

/**
 * Creates an u turn right outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const uTurnRightOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initUTurnRightOutlinedIcon(element, ...properties);
    return element;
}
