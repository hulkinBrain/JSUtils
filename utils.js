class List {
  constructor() {
    this.array = [];
  }

  /**
   * [Pushes an element into the List only if it doesn't already exist]
   * @param {ArrayItem} el Element to be pushed
   */
  pushIfNotExist(newEl) {
    let found = false;
    for(let i=0; i < this.array.length; i++) {
      if(String(this.array[i]) === String(newEl)) {
        found = true;
        break;
      }
    }
    found === false ? this.array.push(newEl) : null;
  }

  pushIfNotExistMultiple(newElArray) {
    newElArray.forEach(element => {
      this.pushIfNotExist(element);
    });
  }

  /**
   * [Deletes first occurance of the element]
   * @param {ArrayItem} el Element to be deleted
   */
  delete(el) {
    for(let i=0; i < this.array.length; i++) {
      if(String(this.array[i]) === String(el)) {
        this.array.splice(i, 1);
        break;
      }
    }
  }

  /**
   * [Deletes all occurances of the element]
   * @param {ArrayItem} el Element to be deleted
   */
  deleteAll(el) {
    for(let i=0; i < this.array.length; i++) {
      if(String(this.array[i]) === String(el)) {
        this.array.splice(i, 1);
        i--;
      }
    }
  }

  /**
   * [Finds first occurance of the element]
   * @param {ArrayItem} el Element to be deleted
   */
  find(el) {
    for(let i=0; i < this.array.length; i++) {
      if(String(this.array[i]) === String(el)) {
        return i;
      }
    }
    return false;
  }

  /**
   * [Finds all occurances of the element]
   * @param {ArrayItem} el Element to be deleted
   */
  findAll(el) {
    let indices = [];
    for(let i=0; i < this.array.length; i++) {
      if(String(this.array[i]) === String(el)) {
        indices.push(i);
      }
    }
    return indices;
  }
}

/**
 * [Converts degree to radians]
 * @param {Number} deg Element to be deleted
 */
const ToRad = (deg) => deg * Math.PI / 180;

/**
 * [Converts radians to degree]
 * @param {Number} deg Element to be deleted
 */
const ToDeg = (rad) => rad * 180 / Math.PI;