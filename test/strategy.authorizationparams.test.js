var Strategy = require('../lib/strategy')
  , chai = require('chai')
  , uri = require('url');


describe('strategy - authorization params configuration', function() {

  describe('configured to pass authorization parameter from request', function() {
    var strategy = new Strategy({
      issuer: 'https://www.example.com',
      authorizationURL: 'https://www.example.com/oauth2/authorize',
      tokenURL: 'https://www.example.com/oauth2/token',
      clientID: 'ABC123',
      clientSecret: 'secret'
    }, function() {});

    strategy.authorizationParams = function(options, req) {
        var params = {};
        if (req.query && req.query.testparam) {
            params.testparamtoserver = req.query.testparam;
        }
        return params;
    }

    var request, url, state;

    before(function(done) {
      chai.passport.use(strategy)
        .redirect(function(u) {
          var pu = uri.parse(u, true);

          state = pu.query.state;
          url = u;
          done();
        })
        .req(function(req) {
          request = req;
          req.query = {testparam:'value1'};
          req.session = {};
        })
        .authenticate();
    });

    it('should be redirected with the param', function() {
      expect(url).to.equal(
          'https://www.example.com/oauth2/authorize' +
          '?testparamtoserver=value1' +
          '&response_type=code&client_id=ABC123&scope=openid' +
          '&state=' + encodeURIComponent(state));
    });
  });

  describe('configured with old style authorizationParams', function() {

    var strategy = new Strategy({
      issuer: 'https://www.example.com',
      authorizationURL: 'https://www.example.com/oauth2/authorize',
      tokenURL: 'https://www.example.com/oauth2/token',
      clientID: 'ABC123',
      clientSecret: 'secret'
    }, function() {});

    strategy.authorizationParams = function(options) {
        var params = {hardcodedparam: 'oldschool'};
        return params;
    }

    var request, url, state;

    before(function(done) {
      chai.passport.use(strategy)
        .redirect(function(u) {
          var pu = uri.parse(u, true);

          state = pu.query.state;
          url = u;
          done();
        })
        .req(function(req) {
          request = req;
          req.query = {testparam:'value1'};
          req.session = {};
        })
        .authenticate();
    });

    it('should be redirected', function() {
      expect(url).to.equal(
          'https://www.example.com/oauth2/authorize' +
          '?hardcodedparam=oldschool' +
          '&response_type=code&client_id=ABC123&scope=openid' +
          '&state=' + encodeURIComponent(state));
    });
  });
});

