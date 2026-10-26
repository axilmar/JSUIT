import { initIcon } from "./icon.js";

//the url of the spellcheck outlined svg; resolved relative to this module
const URL_SPELLCHECKOUTLINED = new URL('../../assets/icons/spellcheckOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a spellcheck outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/spellcheckOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSpellcheckOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_SPELLCHECKOUTLINED }, ...properties);
}

/**
 * Creates a spellcheck outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const spellcheckOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initSpellcheckOutlinedIcon(element, ...properties);
    return element;
}
