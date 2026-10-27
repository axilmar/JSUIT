import { initIcon } from "./icon.js";

//the url of the sports soccer outlined svg; resolved relative to this module
const URL_SPORTSSOCCEROUTLINED = new URL('../../assets/icons/sportsSoccerOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a sports soccer outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/sportsSoccerOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSportsSoccerOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'sportsSoccerOutlinedIcon', url: URL_SPORTSSOCCEROUTLINED }, ...properties);
}

/**
 * Creates a sports soccer outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const sportsSoccerOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initSportsSoccerOutlinedIcon(element, ...properties);
    return element;
}
