import { initIcon } from "./icon.js";

//the url of the emergency recording svg; resolved relative to this module
const URL_EMERGENCYRECORDING = new URL('../../assets/icons/emergencyRecording.svg', import.meta.url).href;

/**
 * Initializes an icon element as an emergency recording icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/emergencyRecording.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initEmergencyRecordingIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_EMERGENCYRECORDING }, ...properties);
}

/**
 * Creates an emergency recording icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const emergencyRecordingIcon = (...properties) => {
    const element = document.createElement('div');
    initEmergencyRecordingIcon(element, ...properties);
    return element;
}
