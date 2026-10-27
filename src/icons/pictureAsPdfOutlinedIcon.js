import { initIcon } from "./icon.js";

//the url of the picture as pdf outlined svg; resolved relative to this module
const URL_PICTUREASPDFOUTLINED = new URL('../../assets/icons/pictureAsPdfOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a picture as pdf outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/pictureAsPdfOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initPictureAsPdfOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'pictureAsPdfOutlinedIcon', url: URL_PICTUREASPDFOUTLINED }, ...properties);
}

/**
 * Creates a picture as pdf outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const pictureAsPdfOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initPictureAsPdfOutlinedIcon(element, ...properties);
    return element;
}
