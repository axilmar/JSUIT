import { initObject } from "./Object.js";

/**
 * Initializes an event target.
 * 
 * It invokes the function `initObject(eventTarget, ...properties)`.
 * 
 * @param {*} eventTarget the event target to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initEventTarget = (eventTarget, ...properties) => {
    console.assert(eventTarget instanceof EventTarget);
    initObject(eventTarget, ...properties);
}
