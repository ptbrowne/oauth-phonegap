var OAuth_creator;

OAuth_creator = require('./lib/oauth')(window, document, window.$, navigator);

OAuth_creator(window || this);
