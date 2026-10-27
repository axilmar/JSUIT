import { initIcon } from "./icon.js";

//the url of the play circle outlined svg; resolved relative to this module
const URL_PLAYCIRCLEOUTLINED = new URL('../../assets/icons/playCircleOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a play circle outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/playCircleOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initPlayCircleOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'playCircleOutlinedIcon', url: URL_PLAYCIRCLEOUTLINED }, ...properties);
}

/**
 * Creates a play circle outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const playCircleOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initPlayCircleOutlinedIcon(element, ...properties);
    return element;
}
