import { initIcon } from "./icon.js";

//the url of the leaderboard outlined svg; resolved relative to this module
const URL_LEADERBOARDOUTLINED = new URL('../../assets/icons/leaderboardOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a leaderboard outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/leaderboardOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initLeaderboardOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'leaderboardOutlinedIcon', url: URL_LEADERBOARDOUTLINED }, ...properties);
}

/**
 * Creates a leaderboard outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const leaderboardOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initLeaderboardOutlinedIcon(element, ...properties);
    return element;
}
