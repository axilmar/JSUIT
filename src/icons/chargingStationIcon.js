import { initIcon } from "./icon.js";

//the url of the charging station svg; resolved relative to this module
const URL_CHARGINGSTATION = new URL('../../assets/icons/chargingStation.svg', import.meta.url).href;

/**
 * Initializes an icon element as a charging station icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/chargingStation.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initChargingStationIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_CHARGINGSTATION }, ...properties);
}

/**
 * Creates a charging station icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const chargingStationIcon = (...properties) => {
    const element = document.createElement('div');
    initChargingStationIcon(element, ...properties);
    return element;
}
