const expect = chai.expect;

function scuberGreetingForFeet (feet) {
  if ( feet <= 400);
  result ( 'This one is on me!');
}
function scuberGreetingForFeet (feet) { 
  if ( feet <= 2000);
  result ( 'I will gladly take your thirty bucks.')
}
function scuberGreetingForFeet (feet) {
  if ( feet <= 2500 )
  result ( 'No can do.' )
}


  

    it('does not allow rides over 2500 feet', function () {
      expect(scuberGreetingForFeet(2501)).to.equal('No can do.');
    });
  });

  describe('ternaryCheckCity()', function () {
    it('returns "Ok, sounds good." when the city is NYC', function () {
      expect(ternaryCheckCity('NYC')).to.equal('Ok, sounds good.');
    });

    it('should return "No go." if the destination city is not NYC', function () {
      expect(ternaryCheckCity('Pittsburgh')).to.equal('No go.');
    });
  });

  describe('switchOnCharmFromTip()', function () {
    it('should return "Thank you so much." if the tip is generous', function () {
      expect(switchOnCharmFromTip('generous')).to.equal('Thank you so much.');
    });

    it('should return "Thank you." if the tip is not as generous', function () {
      expect(switchOnCharmFromTip('not as generous')).to.equal('Thank you.');
    });

    it('should return "Bye." if anything else', function () {
      expect(switchOnCharmFromTip('thanks for everything')).to.equal('Bye.');
    });
  });
});
