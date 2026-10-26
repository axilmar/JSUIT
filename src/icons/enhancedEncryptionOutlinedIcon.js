import { initIcon } from "./icon.js";

//the url of the enhanced encryption outlined svg; resolved relative to this module
const URL_ENHANCEDENCRYPTIONOUTLINED = new URL('../../assets/icons/enhancedEncryptionOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as an enhanced encryption outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/enhancedEncryptionOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initEnhancedEncryptionOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_ENHANCEDENCRYPTIONOUTLINED }, ...properties);
}

/**
 * Creates an enhanced encryption outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const enhancedEncryptionOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initEnhancedEncryptionOutlinedIcon(element, ...properties);
    return element;
}
