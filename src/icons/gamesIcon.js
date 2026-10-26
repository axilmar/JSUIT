import { initIcon } from "./icon.js";

//the url of the games svg; resolved relative to this module
const URL_GAMES = new URL('../../assets/icons/games.svg', import.meta.url).href;

/**
 * Initializes an icon element as a games icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/games.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initGamesIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_GAMES }, ...properties);
}

/**
 * Creates a games icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const gamesIcon = (...properties) => {
    const element = document.createElement('div');
    initGamesIcon(element, ...properties);
    return element;
}
