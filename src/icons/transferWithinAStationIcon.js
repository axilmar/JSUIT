import { initIcon } from "./icon.js";

//the url of the transfer within a station svg; resolved relative to this module
const URL_TRANSFERWITHINASTATION = new URL('../../assets/icons/transferWithinAStation.svg', import.meta.url).href;

/**
 * Initializes an icon element as a transfer within a station icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/transferWithinAStation.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initTransferWithinAStationIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'transferWithinAStationIcon', url: URL_TRANSFERWITHINASTATION }, ...properties);
}

/**
 * Creates a transfer within a station icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const transferWithinAStationIcon = (...properties) => {
    const element = document.createElement('div');
    initTransferWithinAStationIcon(element, ...properties);
    return element;
}
