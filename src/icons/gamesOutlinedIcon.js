import { initIcon } from "./icon.js";

//the url of the games outlined svg; resolved relative to this module
const URL_GAMESOUTLINED = new URL('../../assets/icons/gamesOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a games outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/gamesOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initGamesOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'gamesOutlinedIcon', url: URL_GAMESOUTLINED }, ...properties);
}

/**
 * Creates a games outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const gamesOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initGamesOutlinedIcon(element, ...properties);
    return element;
}
