import { initIcon } from "./icon.js";

//the url of the charging station outlined svg; resolved relative to this module
const URL_CHARGINGSTATIONOUTLINED = new URL('../../assets/icons/chargingStationOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a charging station outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/chargingStationOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initChargingStationOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_CHARGINGSTATIONOUTLINED }, ...properties);
}

/**
 * Creates a charging station outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const chargingStationOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initChargingStationOutlinedIcon(element, ...properties);
    return element;
}
