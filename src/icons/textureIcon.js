import { initIcon } from "./icon.js";

//the url of the texture svg; resolved relative to this module
const URL_TEXTURE = new URL('../../assets/icons/texture.svg', import.meta.url).href;

/**
 * Initializes an icon element as a texture icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/texture.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initTextureIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'textureIcon', url: URL_TEXTURE }, ...properties);
}

/**
 * Creates a texture icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const textureIcon = (...properties) => {
    const element = document.createElement('div');
    initTextureIcon(element, ...properties);
    return element;
}
