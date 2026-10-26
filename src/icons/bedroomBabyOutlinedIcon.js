import { initIcon } from "./icon.js";

//the url of the bedroom baby outlined svg; resolved relative to this module
const URL_BEDROOMBABYOUTLINED = new URL('../../assets/icons/bedroomBabyOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a bedroom baby outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/bedroomBabyOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initBedroomBabyOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_BEDROOMBABYOUTLINED }, ...properties);
}

/**
 * Creates a bedroom baby outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const bedroomBabyOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initBedroomBabyOutlinedIcon(element, ...properties);
    return element;
}
