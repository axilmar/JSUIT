import { initIcon } from "./icon.js";

//the url of the opacity svg; resolved relative to this module
const URL_OPACITY = new URL('../../assets/icons/opacity.svg', import.meta.url).href;

/**
 * Initializes an icon element as an opacity icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/opacity.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initOpacityIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'opacityIcon', url: URL_OPACITY }, ...properties);
}

/**
 * Creates an opacity icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const opacityIcon = (...properties) => {
    const element = document.createElement('div');
    initOpacityIcon(element, ...properties);
    return element;
}
