import { initIcon } from "./icon.js";

//the url of the sports baseball svg; resolved relative to this module
const URL_SPORTSBASEBALL = new URL('../../assets/icons/sportsBaseball.svg', import.meta.url).href;

/**
 * Initializes an icon element as a sports baseball icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/sportsBaseball.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSportsBaseballIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'sportsBaseballIcon', url: URL_SPORTSBASEBALL }, ...properties);
}

/**
 * Creates a sports baseball icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const sportsBaseballIcon = (...properties) => {
    const element = document.createElement('div');
    initSportsBaseballIcon(element, ...properties);
    return element;
}
