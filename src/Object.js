import { isFunction, isObject, isPropertyWritable, isTreeNode } from "./utility.js";

//sets an object's property
const setProperty = (object, propertyName, propertyValue) => {    

    //if the property is writable or not defined, simply set the property
    if (isPropertyWritable(object, propertyName)) {
        object[propertyName] = propertyValue;
        return;
    }

    //read-only properties

    //both sides (the target value and the property value)
    //must be objects, otherwise the properties of the target value
    //cannot be set from the properties of the property value

    //the target value
    const targetValue = object[propertyName];

    //if the target value is undefined or null, then throw an error
    if (targetValue === undefined || targetValue === null) {
        throw new Error(`initObject: read-only property '${propertyName}' is undefined or null.`, { cause: targetValue });
    }

    //the target value must be an object
    if (!isObject(targetValue)) {
        throw new Error(`initObject: read-only property '${propertyName}' not an object.`, { cause: targetValue });

    }

    //the property value must be an object
    if (!isObject(propertyValue)) {
        throw new Error(`initObject: property value for property '${propertyName}' not anobject`, { cause: propertyValue });
    }

    //set the properties of the target object
    setProperties(targetValue, propertyValue);
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
 *  1. functions to use for initialization; the functions are passed the given object.
 *  2. descentants of DOM Node; added to the given object using the method `appendChild`.
 *  3. objects that have a method 'isTreeNode()' that returns true; added to the given object using the method 'appendChild' or 'append'.
 *  4. objects with properties to apply on the given object.
 *  5. values to be converted to a string and added as text in the parent element node.
 * 
 * @param {*} object the object to initialize.
 * @param  {...any} properties array of properties.
 * 
 * @throws Error an error is thrown in one of the following cases:
 * 
 *  1. a given property is not a function, a tree node, an object with properties, or a value to be converted to a string while the object is not a element.
 *  2. a given property is a tree node but the given object is not a tree node.
 *  3. a property of an object is read-only but not an object.
 *  4. a property of an object is read-only but the value to set to it is not an object.
 */
export const initObject = (object, ...properties) => {
    //iterate properties
    for(const property of properties) {

        //if a property is a function, then invoke it with the object
        if (isFunction(property)) {
            property(object);
        }

        //else the property is a tree node, so insert it in another tree node
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
