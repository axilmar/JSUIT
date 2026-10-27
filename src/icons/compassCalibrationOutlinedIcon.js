import { initIcon } from "./icon.js";

//the url of the compass calibration outlined svg; resolved relative to this module
const URL_COMPASSCALIBRATIONOUTLINED = new URL('../../assets/icons/compassCalibrationOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a compass calibration outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/compassCalibrationOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initCompassCalibrationOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'compassCalibrationOutlinedIcon', url: URL_COMPASSCALIBRATIONOUTLINED }, ...properties);
}

/**
 * Creates a compass calibration outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const compassCalibrationOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initCompassCalibrationOutlinedIcon(element, ...properties);
    return element;
}
