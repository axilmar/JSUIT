import { initIcon } from "./icon.js";

//the url of the replay circle filled outlined svg; resolved relative to this module
const URL_REPLAYCIRCLEFILLEDOUTLINED = new URL('../../assets/icons/replayCircleFilledOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a replay circle filled outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/replayCircleFilledOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initReplayCircleFilledOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'replayCircleFilledOutlinedIcon', url: URL_REPLAYCIRCLEFILLEDOUTLINED }, ...properties);
}

/**
 * Creates a replay circle filled outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const replayCircleFilledOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initReplayCircleFilledOutlinedIcon(element, ...properties);
    return element;
}
