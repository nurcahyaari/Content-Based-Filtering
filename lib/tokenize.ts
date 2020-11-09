'use strict';

import { WordTokenizer } from 'natural';

const urlRemoval = (text: string) : string => {
  const pattern = /\b((?:[a-z][\w-]+:(?:\/{1,3}|[a-z0-9%])|www\d{0,3}[.]|[a-z0-9.\-]+[.][a-z]{2,4}\/)(?:[^\s()<>]+|\(([^\s()<>]+|(\([^\s()<>]+\)))*\))+(?:\(([^\s()<>]+|(\([^\s()<>]+\)))*\)|[^\s`!()\[\]{};:'".,<>?«»“”‘’]))/g;

  return text.replace(pattern, "");
}

const htmlRemoval = (text: string) : string => {
  const pattern = /<[^>]*>/g;
  return text.replace(pattern, '');
}

const singleCharacterRemoval = (text : string) : string => {
  const pattern = /(^| ).( |$)/g;

  return text.replace(pattern, " ");
}

const charactersInBracketsRemoval = (text : string) : string => {
  const pattern = / *\([^)]*\) */g;
  return text.replace(pattern, "");
}

const numberRemoval= (text : string) : string => {
  const pattern = /\d/g;
  return text.replace(pattern, ""); 
}

const Tokenize = (text: string): string[] => {
  const tokenizer = new WordTokenizer();
  const textToLower = text.toLowerCase();
  return tokenizer.tokenize(
    charactersInBracketsRemoval(
      numberRemoval(
        singleCharacterRemoval(
          urlRemoval(
            htmlRemoval(textToLower)
            )
          )
        )
      )
    );
};

export default Tokenize;
