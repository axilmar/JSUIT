import './init.js';
import { assert, isFunction } from './utility.js';

/******************************************************************************
    PUBLIC
 ******************************************************************************/

export const initHTMLElement = (element, ...components) => {
    assert(element instanceof HTMLElement, "Value in 'element' argument is not an instance of HTMLElement.");
    setHTMLElementFromComponentArray(element, components);
}

export const createHTMLElement = (tag, ...components) => {
    const element = document.createElement(tag);
    initHTMLElement(element, ...components);
    return element;
}

export const setHTMLElement = (element, ...components) => {
    assert(element instanceof HTMLElement, "Value in 'element' argument is not an instance of HTMLElement.");
    setHTMLElementFromComponentArray(element, components);
    return element;
}

export function HTMLElement_setProperty(key, value) {
    assert(!isCustomProperty(key), customPropertyMessage(key));

    if (isPropertyBag(value)) {
        const currentValue = this[key];

        if (currentValue instanceof HTMLElement) {
            setHTMLElementFromPropertyBag(currentValue, value);
            return;
        }

        if (currentValue instanceof DOMTokenList) {
            currentValue.value = getTruthyKeys(value).join(' ');
            return;
        }

        if (isAssignableObject(currentValue)) {
            setObjectFromPropertyBag(currentValue, value);
            return;
        }
    }

    if (Array.isArray(value)) {
        const currentValue = this[key];

        if (currentValue instanceof HTMLElement) {
            setHTMLElementFromComponentArray(currentValue, value);
            return;
        }

        if (currentValue instanceof DOMTokenList) {
            currentValue.value = value.filter(Boolean).join(' ');
            return;
        }
    }

    this[key] = value;
}

/******************************************************************************
    PRIVATE
 ******************************************************************************/

const setHTMLElementFromPropertyBag = (element, propertyBag) => {
    for (const key in propertyBag) {
        const value = propertyBag[key];
        setHTMLElementProperty(element, key, value);
    }
}

const setHTMLElementProperty = (element, key, value) => {
    if (isFunction(element.setProperty)) {
        element.setProperty(key, value);
    }
    else {
        HTMLElement_setProperty.call(element, key, value);
    }
}

const setHTMLElementFromComponentArray = (element, components) => {
    for(const component of components) {
        setHTMLElementFromComponent(element, component);
    }
}

const setHTMLElementFromComponent = (element, component) => {
    if (isPropertyBag(component)) {
        setHTMLElementFromPropertyBag(element, component);
        return;
    }

    if (Array.isArray(component)) {
        setHTMLElementFromComponentArray(element, component);
        return;
    }

    if (isFunction(component)) {
        component(element);
        return;
    }

    element.append(component);
}

const isPropertyBag = (value) => {
    if (!isAssignableObject(value)) {
        return false;
    }

    for (let proto = Object.getPrototypeOf(value); proto !== null && proto !== Object.prototype; proto = Object.getPrototypeOf(proto)) {
        const ctor = Object.getOwnPropertyDescriptor(proto, 'constructor')?.value;
        if (isFunction(ctor) && isNative(ctor)) {
            return false;
        }
    }

    return true;
}

const isAssignableObject = (value) => {
    return value !== null && typeof value === 'object' && !Array.isArray(value);
}

const isNativeRegEx = /\{\s*\[native code\]\s*\}\s*$/;

const isNative = (fn) => {
    return isNativeRegEx.test(Function.prototype.toString.call(fn));
}

const setObjectFromPropertyBag = (object, propertyBag) => {
    for(const key in propertyBag) {
        const value = propertyBag[key];

        if (isCustomProperty(key)) {
            assert(object instanceof CSSStyleDeclaration, customPropertyMessage(key));
            object.setProperty(key, value);
            continue;
        }

        object[key] = value;
    }
}

const getTruthyKeys = (propertyBag) => {
    const keys = [];
    for(const key in propertyBag) {
        if (propertyBag[key]) {
            keys.push(key);
        }
    }
    return keys;
}

const isCustomProperty = (key) => {
    return key.startsWith('--');
}

const customPropertyMessage = (key) => {
    return `Custom property '${key}' can only be set on a style object; use { style: { '${key}': ... } }.`;
}
