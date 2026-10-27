import { initIcon } from "./icon.js";

//the url of the camera front outlined svg; resolved relative to this module
const URL_CAMERAFRONTOUTLINED = new URL('../../assets/icons/cameraFrontOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a camera front outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/cameraFrontOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initCameraFrontOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'cameraFrontOutlinedIcon', url: URL_CAMERAFRONTOUTLINED }, ...properties);
}

/**
 * Creates a camera front outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const cameraFrontOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initCameraFrontOutlinedIcon(element, ...properties);
    return element;
}
