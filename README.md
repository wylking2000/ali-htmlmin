# [ali-htmlmin v0.1.0](https://github.com/wylking2000/ali-htmlmin)

> Minify HTML



## Getting Started
This plugin requires Grunt `>=0.4.0`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install ali-htmlmin --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('ali-htmlmin');
```




## Htmlmin task
_Run this task with the `grunt htmlmin` command._

*Issues with the output should be reported on the `htmlmin` [issue tracker](https://github.com/kangax/html-minifier/issues/new).*

### Options

See the `html-minifier` [options](https://github.com/kangax/html-minifier#options-quick-reference).

#### Example

```js
grunt.initConfig({
  htmlmin: {                                     // Task
    dist: {                                      // Target
      options: {                                 // Target options
        removeComments: true,
        collapseWhitespace: true,
        tplSelector: 'script[type="text/juicer"],script[type="text/template"]' //jQuery-like css selector for compressing templates
      },
      files: {                                   // Dictionary of files
        'dist/index.html': 'src/index.html',     // 'destination': 'source'
        'dist/contact.html': 'src/contact.html'
      }
    },
    dev: {                                       // Another target
      files: {
        'dist/index.html': 'src/index.html',
        'dist/contact.html': 'src/contact.html'
      }
    }
  }
});

grunt.registerTask('default', ['htmlmin']);
```


## Release History

 * 2015-08-20   v0.1.0   Initial release.

---

Task submitted by [Yonglong.WYL](https://github.com/wylking2000)

*This file was generated on Thu Aug 20 2015 13:39:25.*
