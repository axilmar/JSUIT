import { initIcon } from "./icon.js";

//the url of the factory svg; resolved relative to this module
const URL_FACTORY = new URL('../../assets/icons/factory.svg', import.meta.url).href;

/**
 * Initializes an icon element as a factory icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/factory.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initFactoryIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'factoryIcon', url: URL_FACTORY }, ...properties);
}

/**
 * Creates a factory icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const factoryIcon = (...properties) => {
    const element = document.createElement('div');
    initFactoryIcon(element, ...properties);
    return element;
}
