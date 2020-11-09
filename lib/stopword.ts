'use strict';

import { readFileSync } from 'fs';
import * as path from 'path';

const Stopword = (text: string[]): string[] => {
  const idStopword = readFileSync(path.join(__dirname, 'db/id-stopword.txt'), 'utf8').split('\n');
  const enStopword = readFileSync(path.join(__dirname, 'db/en-stopword.txt'), 'utf8').split('\n');
  const stopwordDictionary = [...idStopword, ...enStopword];
  
  const words = text.filter(value => {
    if(!stopwordDictionary.includes(value)) {
      return value;
    }
  })
  return words;
}

export default Stopword;
