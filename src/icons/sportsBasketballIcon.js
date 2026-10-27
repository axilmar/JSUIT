import { initIcon } from "./icon.js";

//the url of the sports basketball svg; resolved relative to this module
const URL_SPORTSBASKETBALL = new URL('../../assets/icons/sportsBasketball.svg', import.meta.url).href;

/**
 * Initializes an icon element as a sports basketball icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/sportsBasketball.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSportsBasketballIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'sportsBasketballIcon', url: URL_SPORTSBASKETBALL }, ...properties);
}

/**
 * Creates a sports basketball icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const sportsBasketballIcon = (...properties) => {
    const element = document.createElement('div');
    initSportsBasketballIcon(element, ...properties);
    return element;
}
