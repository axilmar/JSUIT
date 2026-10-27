import { initIcon } from "./icon.js";

//the url of the qr code svg; resolved relative to this module
const URL_QRCODE = new URL('../../assets/icons/qrCode.svg', import.meta.url).href;

/**
 * Initializes an icon element as a qr code icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/qrCode.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initQrCodeIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'qrCodeIcon', url: URL_QRCODE }, ...properties);
}

/**
 * Creates a qr code icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const qrCodeIcon = (...properties) => {
    const element = document.createElement('div');
    initQrCodeIcon(element, ...properties);
    return element;
}
