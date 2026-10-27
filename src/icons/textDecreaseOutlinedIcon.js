import { initIcon } from "./icon.js";

//the url of the text decrease outlined svg; resolved relative to this module
const URL_TEXTDECREASEOUTLINED = new URL('../../assets/icons/textDecreaseOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a text decrease outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/textDecreaseOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initTextDecreaseOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'textDecreaseOutlinedIcon', url: URL_TEXTDECREASEOUTLINED }, ...properties);
}

/**
 * Creates a text decrease outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const textDecreaseOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initTextDecreaseOutlinedIcon(element, ...properties);
    return element;
}
