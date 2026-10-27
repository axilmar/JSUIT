import { initIcon } from "./icon.js";

//the url of the local laundry service outlined svg; resolved relative to this module
const URL_LOCALLAUNDRYSERVICEOUTLINED = new URL('../../assets/icons/localLaundryServiceOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a local laundry service outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/localLaundryServiceOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initLocalLaundryServiceOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'localLaundryServiceOutlinedIcon', url: URL_LOCALLAUNDRYSERVICEOUTLINED }, ...properties);
}

/**
 * Creates a local laundry service outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const localLaundryServiceOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initLocalLaundryServiceOutlinedIcon(element, ...properties);
    return element;
}
