
var assert = chai.assert

describe('s', function(){
  describe('NEW_REQUEST', function(){
    it('should create a request', function(){
      var r = i(S_NEW_REQUEST)
      assert.equal(r.constructor.name, 'XMLHttpRequest')
    })
  })
})
