import '../ui/init.js';
import { isArray, isDOMNode, isFunction, isObject, isTreeNode } from "../utility/utility.js";

//sets an object's property
const setProperty = (object, propertyName, propertyValue) => {    
    const objectPropertyValue = object[propertyName];

    //if the object's property is a DOM node, then set it from DOM node/array/object
    if (isDOMNode(objectPropertyValue)) {
        if (isDOMNode(propertyValue)) {
            object[propertyName] = propertyValue;
        }
        else if (isArray(propertyValue)) {
            initObject(objectPropertyValue, ...propertyValue);
        }
        else if (isObject(propertyValue)) {
            setProperties(objectPropertyValue, propertyValue);
        }
        else {
            throw new Error(`initObject: invalid property for DOM node; DOM node id = '${objectPropertyValue.id}', property value = '${propertyValue}'`);
        }
    }

    //else if the object's property is an object, set it from DOM node/array/object/string
    else if (isObject(objectPropertyValue)) {
        if (isDOMNode(propertyValue)) {
            object[propertyName] = propertyValue;
        }
        else if (isArray(propertyValue)) {
            initObject(objectPropertyValue, ...propertyValue);
        }
        else if (isObject(propertyValue)) {
            setProperties(objectPropertyValue, propertyValue);
        }
        else {
            object[propertyName] = propertyValue.toString();
        }
    }

    //else set normal property
    else {
        object[propertyName] = propertyValue;
    }
}

//sets the properties of an object from another object that contains properties
const setProperties = (targetObject, propertiesObject) => {
    for(const propertyName in propertiesObject) {
        const propertyValue = propertiesObject[propertyName];
        setProperty(targetObject, propertyName, propertyValue);
    }
}

/**
 * Initializes an object.
 * 
 * The array of given properties can contain:
 * 
 *  1. functions to use for initialization; the functions are passed the given object.
 *  2. descentants of DOM Node; added to the given object using the method `appendChild`.
 *  3. objects that have a method 'isTreeNode()' that returns true; added to the given object using the method 'appendChild' or 'append'.
 *  4. objects with properties to apply on the given object.
 *  5. values to be converted to a string and added as text in the parent element node.
 * 
 * If a property of an object is itself a DOM node or an object, then it can be set from:
 *  1. another DOM node (to replace the existing DOM node).
 *  2. an array of properties like in this function.
 *  3. an object of key-value pairs to set its properties.
 * 
 * This allows nested objects to be set from one init call.
 * 
 * @param {*} object the object to initialize.
 * @param  {...any} properties array of properties.
 * 
 * @throws Error an error is thrown in one of the following cases:
 * 
 *  1. a given property is not a function, a tree node, an object with properties, or a value to be converted to a string while the object is not a element.
 *  2. a given property is a tree node but the given object is not a tree node.
 */
export const initObject = (object, ...properties) => {
    //iterate properties
    for(const property of properties) {

        //if a property is a function, then invoke it with the object
        if (isFunction(property)) {
            property(object);
        }

        //else the property is a tree node (including a DOM node), so insert it in another tree node
        else if (isTreeNode(property)) {
            if (isTreeNode(object)) {
                object.append?.(property) ?? object.appendChild(property);
            }
            else {
                throw new Error(`initObject: object not a tree node.`);
            }
        }

        //else if the property is an object, then set the object's properties from that
        else if (isObject(property)) {
            setProperties(object, property);
        }
        
        //else if the object is an element, add the value as a string
        else if (object instanceof Element) {
            object.append(property.toString());
        }

        //else throw exception; cannot set the property
        else {
            throw new Error(`initObject: invalid property value.`, { cause: property });
        }
    }
}
