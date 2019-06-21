const feature1 = require("./feature1");

describe('Blah blu', () => {
  it('should eat a banana', () => {
    expect(feature1.registerName({})).toEqual("Isha");
  });
});
