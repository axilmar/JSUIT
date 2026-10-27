import { initIcon } from "./icon.js";

//the url of the nest cam wired stand outlined svg; resolved relative to this module
const URL_NESTCAMWIREDSTANDOUTLINED = new URL('../../assets/icons/nestCamWiredStandOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a nest cam wired stand outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/nestCamWiredStandOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initNestCamWiredStandOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'nestCamWiredStandOutlinedIcon', url: URL_NESTCAMWIREDSTANDOUTLINED }, ...properties);
}

/**
 * Creates a nest cam wired stand outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const nestCamWiredStandOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initNestCamWiredStandOutlinedIcon(element, ...properties);
    return element;
}
