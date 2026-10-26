import { initIcon } from "./icon.js";

//the url of the add card outlined svg; resolved relative to this module
const URL_ADDCARDOUTLINED = new URL('../../assets/icons/addCardOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as an add card outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/addCardOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initAddCardOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_ADDCARDOUTLINED }, ...properties);
}

/**
 * Creates an add card outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const addCardOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initAddCardOutlinedIcon(element, ...properties);
    return element;
}
