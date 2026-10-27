import { initIcon } from "./icon.js";

//the url of the rocket launch svg; resolved relative to this module
const URL_ROCKETLAUNCH = new URL('../../assets/icons/rocketLaunch.svg', import.meta.url).href;

/**
 * Initializes an icon element as a rocket launch icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/rocketLaunch.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initRocketLaunchIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'rocketLaunchIcon', url: URL_ROCKETLAUNCH }, ...properties);
}

/**
 * Creates a rocket launch icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const rocketLaunchIcon = (...properties) => {
    const element = document.createElement('div');
    initRocketLaunchIcon(element, ...properties);
    return element;
}
