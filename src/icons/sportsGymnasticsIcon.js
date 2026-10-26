import { initIcon } from "./icon.js";

//the url of the sports gymnastics svg; resolved relative to this module
const URL_SPORTSGYMNASTICS = new URL('../../assets/icons/sportsGymnastics.svg', import.meta.url).href;

/**
 * Initializes an icon element as a sports gymnastics icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/sportsGymnastics.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSportsGymnasticsIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_SPORTSGYMNASTICS }, ...properties);
}

/**
 * Creates a sports gymnastics icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const sportsGymnasticsIcon = (...properties) => {
    const element = document.createElement('div');
    initSportsGymnasticsIcon(element, ...properties);
    return element;
}
