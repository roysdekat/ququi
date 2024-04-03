if (!dataNumberArray) {
  // Handle the case when dataNumberArray is falsy
  // This could include initializing it, logging an error, etc.
  dataNumberArray = [];
} else {
  // Process the dataNumberArray when it is truthy
  // This could include sorting, filtering, reducing, etc.
  dataNumberArray.sort((a, b) => a - b);
}
