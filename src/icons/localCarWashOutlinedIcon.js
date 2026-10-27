import { initIcon } from "./icon.js";

//the url of the local car wash outlined svg; resolved relative to this module
const URL_LOCALCARWASHOUTLINED = new URL('../../assets/icons/localCarWashOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a local car wash outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/localCarWashOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initLocalCarWashOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'localCarWashOutlinedIcon', url: URL_LOCALCARWASHOUTLINED }, ...properties);
}

/**
 * Creates a local car wash outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const localCarWashOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initLocalCarWashOutlinedIcon(element, ...properties);
    return element;
}
