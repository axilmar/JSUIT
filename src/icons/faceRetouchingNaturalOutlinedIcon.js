import { initIcon } from "./icon.js";

//the url of the face retouching natural outlined svg; resolved relative to this module
const URL_FACERETOUCHINGNATURALOUTLINED = new URL('../../assets/icons/faceRetouchingNaturalOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a face retouching natural outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/faceRetouchingNaturalOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initFaceRetouchingNaturalOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'faceRetouchingNaturalOutlinedIcon', url: URL_FACERETOUCHINGNATURALOUTLINED }, ...properties);
}

/**
 * Creates a face retouching natural outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const faceRetouchingNaturalOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initFaceRetouchingNaturalOutlinedIcon(element, ...properties);
    return element;
}
