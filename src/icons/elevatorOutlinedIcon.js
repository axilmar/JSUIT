import { initIcon } from "./icon.js";

//the url of the elevator outlined svg; resolved relative to this module
const URL_ELEVATOROUTLINED = new URL('../../assets/icons/elevatorOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as an elevator outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/elevatorOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initElevatorOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_ELEVATOROUTLINED }, ...properties);
}

/**
 * Creates an elevator outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const elevatorOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initElevatorOutlinedIcon(element, ...properties);
    return element;
}
