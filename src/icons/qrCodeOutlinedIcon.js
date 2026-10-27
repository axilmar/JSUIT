import { initIcon } from "./icon.js";

//the url of the qr code outlined svg; resolved relative to this module
const URL_QRCODEOUTLINED = new URL('../../assets/icons/qrCodeOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a qr code outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/qrCodeOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initQrCodeOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'qrCodeOutlinedIcon', url: URL_QRCODEOUTLINED }, ...properties);
}

/**
 * Creates a qr code outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const qrCodeOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initQrCodeOutlinedIcon(element, ...properties);
    return element;
}
