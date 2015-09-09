describe('#createArray', function() {
  it('makes an array based upon the number passed in', function() {
    expect(createArray(2)).to.eql([1,2]);
  });
});

describe('#findPrime', function() {
  it('returns [1, 2, 3] as prime from [1, 2, 3, 4]', function() {
    expect(findPrime(4)).to.eql([1,2,3]);
  });
  it('returns [1..20] as prime from [1,2,3,5,7,11,13,17,19]', function() {
    expect(findPrime(20)).to.eql([1,2,3,5,7,11,13,17,19]);
  });
});
