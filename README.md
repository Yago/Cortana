#Cortana : a sexy Trulia's Hologram theme

Cortana is a nice theme for [Hologram](https://github.com/trulia/hologram), the ruby front-end doc generator, and inspired by PebbleRoad's [Tapestry](https://github.com/PebbleRoad/tapestry).

##Usage
Just place **Cortana** wherever you want and inside the `hologram_config.yml` don't forget to specify the path.

You will have something like that :

```
source: ./path/to/your/source
destination: ./path/to/output
documentation_assets: ./path/to/cortana

# To have a custom index page build with your README.md
index: README
```

We recomand to place a `README.md` in the root of your source directory to build a custom styleguide index page.

You have also to **include manually** all your used stylesheets and script inside the `_header.html` and/or `_footer.html`.

##Edition
To edit **Cortana** you will need [Bower](bower.io),  [npm](https://www.npmjs.org) and [NodeJS](http://nodejs.org/)

To setup the project :

```
$ npm install
$ bower install
$ gulp
```

##Dependencies
* [jQuery](https://github.com/jquery/jquery)
* [Slidebars](https://github.com/adchsm/Slidebars), by adchsm
* [Sticky-kit](https://github.com/leafo/sticky-kit), by leafo

