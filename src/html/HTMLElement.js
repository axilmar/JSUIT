import { initElement } from "../core/Element.js";

//if the object has a disabled property, it adds an 'enabled' property.
const addEnabledProperty = (htmlElement) => {
    if ('disabled' in htmlElement) {
        Object.defineProperty(htmlElement, 'enabled', {
            get() {
                return !this.disabled;
            },

            set(value) {
                this.disabled = !Boolean(value);
            }
        })
    }
}

/**
 * Initializes an HTML element.
 * 
 * It invokes the function `initElement(htmlElement, ...properties)`.
 * 
 * If the element has a 'disabled' property, then the property 'enabled' is added to it.
 * 
 * @param {*} htmlElement the html element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initHTMLElement = (htmlElement, ...properties) => {
    console.assert(htmlElement instanceof HTMLElement);
    addEnabledProperty(htmlElement);
    initElement(htmlElement, { additionalClassName: 'HTMLElement' }, ...properties);
}
