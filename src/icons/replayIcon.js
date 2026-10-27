import { initIcon } from "./icon.js";

//the url of the replay svg; resolved relative to this module
const URL_REPLAY = new URL('../../assets/icons/replay.svg', import.meta.url).href;

/**
 * Initializes an icon element as a replay icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/replay.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initReplayIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'replayIcon', url: URL_REPLAY }, ...properties);
}

/**
 * Creates a replay icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const replayIcon = (...properties) => {
    const element = document.createElement('div');
    initReplayIcon(element, ...properties);
    return element;
}
