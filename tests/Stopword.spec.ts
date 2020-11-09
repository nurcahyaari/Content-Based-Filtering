import {expect} from 'chai';
import 'mocha'

import Stopword from '../lib/Stopword';
import Tokenize from '../lib/Tokenize';

describe("Stopword removal", () => { 
    it("Should remove stopword or slankword", () =>  { 
        expect(Stopword(["cyng", "negara"])).to.have.members(["negara"]).to.does.not.have.members(["cyng"])
    });

    it("Should remove stopword", () => {
        const words = Tokenize("saya suka dia kemarin sore");

        expect(Stopword(words))
        .to.have.members(["suka", "kemarin", "sore"])
        .to.does.not.have.members(["saya", "dia"]);
    })

    it("Should tokenize, stem and ")
})
