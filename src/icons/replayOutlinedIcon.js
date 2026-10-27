import { initIcon } from "./icon.js";

//the url of the replay outlined svg; resolved relative to this module
const URL_REPLAYOUTLINED = new URL('../../assets/icons/replayOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a replay outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/replayOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initReplayOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'replayOutlinedIcon', url: URL_REPLAYOUTLINED }, ...properties);
}

/**
 * Creates a replay outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const replayOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initReplayOutlinedIcon(element, ...properties);
    return element;
}
