import { initIcon } from "./icon.js";

//the url of the emergency recording outlined svg; resolved relative to this module
const URL_EMERGENCYRECORDINGOUTLINED = new URL('../../assets/icons/emergencyRecordingOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as an emergency recording outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/emergencyRecordingOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initEmergencyRecordingOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'emergencyRecordingOutlinedIcon', url: URL_EMERGENCYRECORDINGOUTLINED }, ...properties);
}

/**
 * Creates an emergency recording outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const emergencyRecordingOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initEmergencyRecordingOutlinedIcon(element, ...properties);
    return element;
}
