"use strict"
import {expect} from 'chai';
import 'mocha';

import {Tokenize} from '../lib/Tokenize';

describe('Tokenizers Testing', () => {
    it('Will it tokenize this text', () => {
        expect(Tokenize("Sekarang saya sedang makan siang")).to.deep.equal(["sekarang", "saya", "sedang", "makan", "siang"]);
        expect(Tokenize("Sekarang saya sedang makan siang?")).to.deep.equal(["sekarang", "saya", "sedang", "makan", "siang"]);
        expect(Tokenize("apakah, saya sedang. makan? siang!")).to.deep.equal(["apakah", "saya", "sedang", "makan", "siang"]);
        // expect(Tokenize(`
        // <a href="https://example.com">
        //   lorem ipsum <strong>dolor</strong> <em>sit</em> amet
        // </a>
        // `));
    });
    it('should tokenize strings', () =>  {
        expect(Tokenize('these are things')).to.deep.equal(['these', 'are', 'things']);
      });
    
      it('should tokenize strings via attached string method', () =>  {
        expect(Tokenize('these are things')).to.deep.equal(['these', 'are', 'things']);
      });
    
      it('should tokenize strings via attached string method', () =>  {
        expect(Tokenize('these are things')).to.deep.equal(['these', 'are', 'things']);
      });
    
      it('should swallow punctuation', () =>  {
        expect(Tokenize('these are things, no')).to.deep.equal(['these', 'are', 'things', 'no']);
      });
    
      it('should swallow final punctuation', () =>  {
        expect(Tokenize('these are things, no?')).to.deep.equal(['these', 'are', 'things', 'no']);
      });
    
      it('should swallow initial punctuation', () =>  {
        expect(Tokenize('.these are things, no')).to.deep.equal(['these', 'are', 'things', 'no']);
      });
    
      it('should swallow duplicate punctuation', () =>  {
        expect(Tokenize('i shal... pause')).to.deep.equal(['shal', 'pause']);
      });  
      
    
});
