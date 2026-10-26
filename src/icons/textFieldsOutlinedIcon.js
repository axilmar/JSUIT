import { initIcon } from "./icon.js";

//the url of the text fields outlined svg; resolved relative to this module
const URL_TEXTFIELDSOUTLINED = new URL('../../assets/icons/textFieldsOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a text fields outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/textFieldsOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initTextFieldsOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_TEXTFIELDSOUTLINED }, ...properties);
}

/**
 * Creates a text fields outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const textFieldsOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initTextFieldsOutlinedIcon(element, ...properties);
    return element;
}
