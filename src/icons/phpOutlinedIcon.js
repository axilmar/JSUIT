import { initIcon } from "./icon.js";

//the url of the php outlined svg; resolved relative to this module
const URL_PHPOUTLINED = new URL('../../assets/icons/phpOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a php outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/phpOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initPhpOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'phpOutlinedIcon', url: URL_PHPOUTLINED }, ...properties);
}

/**
 * Creates a php outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const phpOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initPhpOutlinedIcon(element, ...properties);
    return element;
}
