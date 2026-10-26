import { initIcon } from "./icon.js";

//the url of the texture outlined svg; resolved relative to this module
const URL_TEXTUREOUTLINED = new URL('../../assets/icons/textureOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a texture outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/textureOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initTextureOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_TEXTUREOUTLINED }, ...properties);
}

/**
 * Creates a texture outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const textureOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initTextureOutlinedIcon(element, ...properties);
    return element;
}
