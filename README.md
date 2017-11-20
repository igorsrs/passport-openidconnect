# Passport-OpenID Connect
##with support to request data to authorization params

Forked from [passport-openidconnect](https://github.com/jaredhanson/passport-openidconnect),
adding support to use request data to authorizationParams.

```
strategy.authorizationParams = function(options, req) {
...
  params.foo = req.param.bar;
...
  return params;
}
```

[Passport](https://github.com/jaredhanson/passport) strategy for authenticating
with [OpenID Connect](http://openid.net/connect/).

This module lets you authenticate using OpenID Connect in your Node.js
applications.  By plugging into Passport, OpenID Connect authentication can be
easily and unobtrusively integrated into any application or framework that
supports [Connect](http://www.senchalabs.org/connect/)-style middleware,
including [Express](http://expressjs.com/).

## Credits

  - [Jared Hanson](http://github.com/jaredhanson)

## License

[The MIT License](http://opensource.org/licenses/MIT)

Copyright (c) 2011-2013 Jared Hanson <[http://jaredhanson.net/](http://jaredhanson.net/)>

<a target='_blank' rel='nofollow' href='https://app.codesponsor.io/link/vK9dyjRnnWsMzzJTQ57fRJpH/jaredhanson/passport-openidconnect'>  <img alt='Sponsor' width='888' height='68' src='https://app.codesponsor.io/embed/vK9dyjRnnWsMzzJTQ57fRJpH/jaredhanson/passport-openidconnect.svg' /></a>
