import { initIcon } from "./icon.js";

//the url of the factory outlined svg; resolved relative to this module
const URL_FACTORYOUTLINED = new URL('../../assets/icons/factoryOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a factory outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/factoryOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initFactoryOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'factoryOutlinedIcon', url: URL_FACTORYOUTLINED }, ...properties);
}

/**
 * Creates a factory outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const factoryOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initFactoryOutlinedIcon(element, ...properties);
    return element;
}
