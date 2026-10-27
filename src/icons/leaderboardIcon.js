import { initIcon } from "./icon.js";

//the url of the leaderboard svg; resolved relative to this module
const URL_LEADERBOARD = new URL('../../assets/icons/leaderboard.svg', import.meta.url).href;

/**
 * Initializes an icon element as a leaderboard icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/leaderboard.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initLeaderboardIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'leaderboardIcon', url: URL_LEADERBOARD }, ...properties);
}

/**
 * Creates a leaderboard icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const leaderboardIcon = (...properties) => {
    const element = document.createElement('div');
    initLeaderboardIcon(element, ...properties);
    return element;
}
