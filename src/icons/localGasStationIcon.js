import { initIcon } from "./icon.js";

//the url of the local gas station svg; resolved relative to this module
const URL_LOCALGASSTATION = new URL('../../assets/icons/localGasStation.svg', import.meta.url).href;

/**
 * Initializes an icon element as a local gas station icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/localGasStation.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initLocalGasStationIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'localGasStationIcon', url: URL_LOCALGASSTATION }, ...properties);
}

/**
 * Creates a local gas station icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const localGasStationIcon = (...properties) => {
    const element = document.createElement('div');
    initLocalGasStationIcon(element, ...properties);
    return element;
}
