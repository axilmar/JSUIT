import { initIcon } from "./icon.js";

//the url of the coffee maker outlined svg; resolved relative to this module
const URL_COFFEEMAKEROUTLINED = new URL('../../assets/icons/coffeeMakerOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a coffee maker outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/coffeeMakerOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initCoffeeMakerOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'coffeeMakerOutlinedIcon', url: URL_COFFEEMAKEROUTLINED }, ...properties);
}

/**
 * Creates a coffee maker outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const coffeeMakerOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initCoffeeMakerOutlinedIcon(element, ...properties);
    return element;
}
