
var assert = chai.assert

describe('s', function(){
  describe('CALL', function(){
    it('should support 0 arguments', function(){
      var c = 0
      var a = { x: function(){ c++ } }

      i(S_CALL, a, 'x')

      assert.equal(c, 1)
    })

    it('should support n arguments', function(){
      var c = 10
      var a = { x: function(_, _, n){ c = c + n } }

      i(S_CALL, a, 'x', null, null, 15)

      assert.equal(c, 25)
    })
  })
})
