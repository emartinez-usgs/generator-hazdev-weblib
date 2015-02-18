generator-hazdev-weblib
=======================

[![Build Status](https://secure.travis-ci.org/emartinez-usgs/generator-hazdev-weblib.png?branch=master)](https://travis-ci.org/emartinez-usgs/generator-hazdev-weblib)

A web library generator for Yeoman used by the USGS Earthquake Hazards
Program "HazDev" team.

Getting started
---------------

To scaffold a new application, you need to install both
[yeoman](https://github.com/yeoman/yo) and this generator installed globally.
Next, create and navigate to you application directory on the command line.
Finally, run the generator using `yo` in order to scaffold the application.

For example:

```
% npm install -g yo
% npm install -g generator-hazdev-weblib
% mkdir my-application && cd my-application
% yo hazdev-weblib
```

TODO :: Update getting started to be more clear/complete.

Road Map
--------

Here are the list of things to be done on this generator. They will probably
only be implemented as needed unless there is copious amounts of free time made
available.

1. Add support for optionally including Leaflet for generating application
   scaffolding that require interactive maps.
2. Update default set of tests in generate application to be more
   comprehensive.
3. Add testing coverage reports etc... for generated application.

License
-------

Please see the included [License](License.md).
