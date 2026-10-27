import { initIcon } from "./icon.js";

//the url of the sports martial arts outlined svg; resolved relative to this module
const URL_SPORTSMARTIALARTSOUTLINED = new URL('../../assets/icons/sportsMartialArtsOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a sports martial arts outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/sportsMartialArtsOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSportsMartialArtsOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'sportsMartialArtsOutlinedIcon', url: URL_SPORTSMARTIALARTSOUTLINED }, ...properties);
}

/**
 * Creates a sports martial arts outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const sportsMartialArtsOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initSportsMartialArtsOutlinedIcon(element, ...properties);
    return element;
}
