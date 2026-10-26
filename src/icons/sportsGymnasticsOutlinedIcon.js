import { initIcon } from "./icon.js";

//the url of the sports gymnastics outlined svg; resolved relative to this module
const URL_SPORTSGYMNASTICSOUTLINED = new URL('../../assets/icons/sportsGymnasticsOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a sports gymnastics outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/sportsGymnasticsOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSportsGymnasticsOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_SPORTSGYMNASTICSOUTLINED }, ...properties);
}

/**
 * Creates a sports gymnastics outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const sportsGymnasticsOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initSportsGymnasticsOutlinedIcon(element, ...properties);
    return element;
}
