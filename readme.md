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

### Preprocessing
Preprocessing is a function for preprocessing a text, preprocessing function will do tokenize, stopword removal, and stemming. 

```js

/**
 * 
 */

```

### TF-IDF
TF-IDF is a function that will calculate the weight of the term. you can use the full of text without any preprocessing, or you can use the array of string. the string is a return from the preprocessing function

```js

/**
 * 
 */

```


### Word Vector
Word Vector is a function for create vector object


### Cosine Similarity
Cosine similarity function is a function for calculate the distance between two vector object. before you used this function you must create vector object using Word Vector function
