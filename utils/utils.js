
exports.validate = {
  requestBodyType(incomingMessage, type) {
    if (incomingMessage.headers['content-type'].includes(type)) {
      return true;
    }
    return false;
  },
  type(testObj, type) {
    if (testObj.constructor.name.toLowerCase() === type) return true;
    return false;
  },
  objectPropertiesAreInArray(object, array) {
    let validObject = true;

    Object.keys(object).forEach((key) => {
      if (!array.includes(key)) validObject = false;
    });

    if (validObject && Object.keys(object).length > array.length) validObject = false;

    return validObject;
  },
  isEmpty(obj) {
    return (Object.keys(obj).length === 0);
  },
};
