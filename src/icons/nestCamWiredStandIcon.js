import { initIcon } from "./icon.js";

//the url of the nest cam wired stand svg; resolved relative to this module
const URL_NESTCAMWIREDSTAND = new URL('../../assets/icons/nestCamWiredStand.svg', import.meta.url).href;

/**
 * Initializes an icon element as a nest cam wired stand icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/nestCamWiredStand.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initNestCamWiredStandIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_NESTCAMWIREDSTAND }, ...properties);
}

/**
 * Creates a nest cam wired stand icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const nestCamWiredStandIcon = (...properties) => {
    const element = document.createElement('div');
    initNestCamWiredStandIcon(element, ...properties);
    return element;
}
