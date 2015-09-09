describe("#translator", function() {
  it("adds -ay to words that start with a vowel", function() {
    var test_word = 'over';
    expect(translator(test_word)).to.equal('overay');
  });
  it('moves consecutive constants to the end and adds ay', function() {
    var test_word = 'shlep';
    expect(translator('shlep')).to.equal('epshl');
  });
  it('moves qu together', function() {
    var test_word = 'queen';
    expect(translator(test_word)).to.equal('eenqu');
  });
  it('treats y as a consonant', function() {
    expect(translator('yes')).to.equal('esy');
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
