import { initIcon } from "./icon.js";

//the url of the replay circle filled svg; resolved relative to this module
const URL_REPLAYCIRCLEFILLED = new URL('../../assets/icons/replayCircleFilled.svg', import.meta.url).href;

/**
 * Initializes an icon element as a replay circle filled icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/replayCircleFilled.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initReplayCircleFilledIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'replayCircleFilledIcon', url: URL_REPLAYCIRCLEFILLED }, ...properties);
}

/**
 * Creates a replay circle filled icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const replayCircleFilledIcon = (...properties) => {
    const element = document.createElement('div');
    initReplayCircleFilledIcon(element, ...properties);
    return element;
}
