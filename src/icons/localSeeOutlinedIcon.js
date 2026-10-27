import { initIcon } from "./icon.js";

//the url of the local see outlined svg; resolved relative to this module
const URL_LOCALSEEOUTLINED = new URL('../../assets/icons/localSeeOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a local see outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/localSeeOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initLocalSeeOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'localSeeOutlinedIcon', url: URL_LOCALSEEOUTLINED }, ...properties);
}

/**
 * Creates a local see outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const localSeeOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initLocalSeeOutlinedIcon(element, ...properties);
    return element;
}
