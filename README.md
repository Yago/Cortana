#Cortana : a sexy Hologram theme

>Cortana is a nice theme for Trulia's [Hologram](https://github.com/trulia/hologram), the ruby front-end doc generator, and inspired by PebbleRoad's [Tapestry](https://github.com/PebbleRoad/tapestry).

Check the [Demo](http://yago31.github.io/Cortana-example)

##Usage
Install **Cortana** and **Hologram** with Bower. 

bower.json
```
{
  "name": "Your project name",
  "version": "1.0.0",
  "devDependencies": {
    "hologram": "git@github.com:trulia/hologram.git#master",
    "Cortana": "1.1.*"
  }
}
```

Your `hologram_config.yml` have to be like that :

```
# Directory to parse
source: ./bootstrap-base

# Directory to build the styleguide
destination: ./styleguide

# Hologram theme
documentation_assets: ./cortana

# To have a custom index page build with your README.md
index: README

# List all css to include for the styleguide render examples
css_include:
  - '../bootstrap/css/bootstrap.css'
  - '../bootflat/css/bootflat.css'

# List all js to include for the styleguide render examples
js_include:
  - 'http://code.jquery.com/jquery-1.10.2.min.js'
  - '../bootstrap/js/bootstrap.js'

# String who is used to split the category name and create category wrapper
name_scope: ' > '
```

We recomand to place a `README.md` in the root of your source directory to build a custom styleguide index page.

To have add a **custom category wrapper** like in the example, just add it before your category name with `space>space` and before all the other categories in the same wrapper. This `name_scope` can be change in the `hologram_config.yml`. You will have something like this :

```
/*doc
---
title: My Title
name: myname
category: General > Button
---

Some Markdown comment...

*/
```

Finally, to export your styleguide, use the bower components hologram instead of the gem (more recent) :

```
$ bower_components/hologram/bin/hologram
```

## Edition
To edit **Cortana** you will need [Bower](bower.io),  [npm](https://www.npmjs.org) and [NodeJS](http://nodejs.org/)

To setup the project :

```
$ npm install
$ bower install
$ gulp
```

##@TODO

* Dark theme

##Dependencies
* [jQuery](https://github.com/jquery/jquery)
* [Slidebars](https://github.com/adchsm/Slidebars), by adchsm
* [Sticky-kit](https://github.com/leafo/sticky-kit), by leafo
* [Typeahead.js](https://github.com/twitter/typeahead.js), by twitter
* [Hogan](https://github.com/twitter/hogan.js), by twitter

