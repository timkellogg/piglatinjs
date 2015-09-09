describe("#translator", function() {
  it("adds -ay to words that start with a vowel", function() {
    var test_word = 'over';
    expect(translator(test_word)).to.equal('overay');
  });
  it('moves consecutive constants to the end and adds ay', function() {
    var test_word = 'shlep';
    expect(translator('shlep')).to.equal('epshlay');
  });
  it('moves qu together', function() {
    var test_word = 'queen';
    expect(translator(test_word)).to.equal('eenquay');
  });
  it('treats y as a consonant', function() {
    expect(translator('yes')).to.equal('esyay');
  });
});

describe("#checkConsonant", function() {
  it("finds a vowel", function() {
    expect(checkConsonant('a')).to.equal(false);
  });

  it('finds a consonant', function() {
    expect(checkConsonant('c')).to.equal(true);
  });
});

describe("#checkString", function() {
  it("converts a string of words to Pig Latin", function() {
    expect(checkString('This is')).to.equal("isthay isay")
  });
});
