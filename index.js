class Formatter {
  //add static methods here
  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9-' ]+/g, '');
  }
  static titleize(string) {
    const ignoreArray = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from'];
    const newString = this.capitalize(string);
    const splitArray = newString.split(' ');
    const titleizeArray = splitArray.map((word) => {
      if (ignoreArray.includes(word)) {
        return word;
      } else {
        return this.capitalize(word);
      }
    });
    return titleizeArray.join(' ');
  }
}