const fs = require('fs');
const TextTokenizer = require('./TextTokenizer');

class TextSearcher {
  /**
   * Initializes the text searcher with the contents of a text file.
   * The current implementation just reads the contents into a string
   * and passes them to #init().  You may modify this implementation if you need to.
   *
   * @param file Input file
   * @throws exception
   */
  constructor(file) {
    try {
      const data = fs.readFileSync(file, 'utf-8');
      this._init(data);
    } catch (err) {
      console.error('ENCOUNTERED ERROR STARTING SEARCHER: ', err);
    }
  }

  /**
   *  Initializes any internal data structures that are needed for
   *  this class to implement search efficiently.
   */
  _init(fileContents) {
    // TODO -- fill in implementation
  }

  /**
   *
   * @param queryWord    [String] The word to search for in the file contents.
   * @param contextWords [Number] The number of words of context to provide on
   *                              each side of the query word.
   *
   * @return One context string for each time the query word appears in the file.
   */
  search(queryWord, contextWords) {
    // TODO -- fill in implementation
  }
}

// Any needed utility classes/functions can just go in this file

module.exports = TextSearcher;
