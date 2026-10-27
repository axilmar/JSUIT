import { initIcon } from "./icon.js";

//the url of the rocket launch outlined svg; resolved relative to this module
const URL_ROCKETLAUNCHOUTLINED = new URL('../../assets/icons/rocketLaunchOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a rocket launch outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/rocketLaunchOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initRocketLaunchOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'rocketLaunchOutlinedIcon', url: URL_ROCKETLAUNCHOUTLINED }, ...properties);
}

/**
 * Creates a rocket launch outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const rocketLaunchOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initRocketLaunchOutlinedIcon(element, ...properties);
    return element;
}
