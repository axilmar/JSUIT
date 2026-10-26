import { initIcon } from "./icon.js";

//the url of the text increase outlined svg; resolved relative to this module
const URL_TEXTINCREASEOUTLINED = new URL('../../assets/icons/textIncreaseOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a text increase outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/textIncreaseOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initTextIncreaseOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_TEXTINCREASEOUTLINED }, ...properties);
}

/**
 * Creates a text increase outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const textIncreaseOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initTextIncreaseOutlinedIcon(element, ...properties);
    return element;
}
