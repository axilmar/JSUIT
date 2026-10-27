import { initIcon } from "./icon.js";

//the url of the elevator svg; resolved relative to this module
const URL_ELEVATOR = new URL('../../assets/icons/elevator.svg', import.meta.url).href;

/**
 * Initializes an icon element as an elevator icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/elevator.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initElevatorIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'elevatorIcon', url: URL_ELEVATOR }, ...properties);
}

/**
 * Creates an elevator icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const elevatorIcon = (...properties) => {
    const element = document.createElement('div');
    initElevatorIcon(element, ...properties);
    return element;
}
