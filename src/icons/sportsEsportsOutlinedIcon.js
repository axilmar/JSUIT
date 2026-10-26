import { initIcon } from "./icon.js";

//the url of the sports esports outlined svg; resolved relative to this module
const URL_SPORTSESPORTSOUTLINED = new URL('../../assets/icons/sportsEsportsOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a sports esports outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/sportsEsportsOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSportsEsportsOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_SPORTSESPORTSOUTLINED }, ...properties);
}

/**
 * Creates a sports esports outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const sportsEsportsOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initSportsEsportsOutlinedIcon(element, ...properties);
    return element;
}
