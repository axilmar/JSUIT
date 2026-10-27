import { initIcon } from "./icon.js";

//the url of the compass calibration svg; resolved relative to this module
const URL_COMPASSCALIBRATION = new URL('../../assets/icons/compassCalibration.svg', import.meta.url).href;

/**
 * Initializes an icon element as a compass calibration icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/compassCalibration.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initCompassCalibrationIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'compassCalibrationIcon', url: URL_COMPASSCALIBRATION }, ...properties);
}

/**
 * Creates a compass calibration icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const compassCalibrationIcon = (...properties) => {
    const element = document.createElement('div');
    initCompassCalibrationIcon(element, ...properties);
    return element;
}
