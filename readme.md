## What is it ?
Content Based Filtering is a library that used for generating recommendation system by document's content like title, author name, category, description, etc. this library is using for calculating content based filtering algorithm. built in top of nodejs with natural.js for solve NLP task. 
<br>
<br>

## How To use

### Tokenize
```js

const text = `Content-based filtering methods are based on a description`;

const token = Tokenize(text);

/**
 * output will be like here  [
 * 'content',
 * 'based',
 * 'filtering',
 * 'are',
 * 'based',
 * 'on',
 * 'description'
 * ]
 * 
 */
```
<br>

### Filtering
```js
/**
 * Text value must a array of string
 * or a value that returned from Tokenize function
 */
const text = [
    'content',
    'based',
    'filtering',
    'are',
    'based',
    'on',
    'description'
 ]

const token = Stopword(text);

/**
 * output will be like here  [
 * 'content',
 * 'based',
 * 'filtering',
 * 'based',
 * 'description'
 * ]
 * 
 * /
```
<br>

### Stemming
```js
/**
 * Text value must a array of string
 * or a value that returned from Stopword function
 */
const text = [
    'content',
    'based',
    'filtering',
    'are',
    'based',
    'on',
    'description'
 ]

const token = text.map((t: string) => Stemming(t));

/**
 * output will be like here  [
 * 'content',
 * 'base',
 * 'filter',
 * 'base',
 * 'description'
 * ]
 * 
 * /
```
<br>
