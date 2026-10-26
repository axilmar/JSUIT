import { initIcon } from "./icon.js";

//the url of the scoreboard outlined svg; resolved relative to this module
const URL_SCOREBOARDOUTLINED = new URL('../../assets/icons/scoreboardOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a scoreboard outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/scoreboardOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initScoreboardOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_SCOREBOARDOUTLINED }, ...properties);
}

/**
 * Creates a scoreboard outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const scoreboardOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initScoreboardOutlinedIcon(element, ...properties);
    return element;
}
