import { initIcon } from "./icon.js";

//the url of the picture in picture svg; resolved relative to this module
const URL_PICTUREINPICTURE = new URL('../../assets/icons/pictureInPicture.svg', import.meta.url).href;

/**
 * Initializes an icon element as a picture in picture icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/pictureInPicture.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initPictureInPictureIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'pictureInPictureIcon', url: URL_PICTUREINPICTURE }, ...properties);
}

/**
 * Creates a picture in picture icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const pictureInPictureIcon = (...properties) => {
    const element = document.createElement('div');
    initPictureInPictureIcon(element, ...properties);
    return element;
}
