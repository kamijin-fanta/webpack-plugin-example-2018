
class PackageListPlugin {
  constructor() {
  }
  apply(compiler) {
    const plugin = {
      name: 'PackageListPlugin'
    }
    compiler.hooks.compilation.tap(plugin, compilation => {
      // compilation.hooks.optimizeDependencies.tap(plugin, (modules) => {
      //   for(const module of modules) {
      //     console.log('module', module.resource);
      //   }
      // })
    })

    compiler.hooks.emit.tapAsync(plugin, ((compilation, cb) => {
      for(const chunk of compilation.chunks) {
        console.log('chunk: ', chunk.name);
        const modulePathList = chunk.entryModule.dependencies.map(d => d.originModule && d.originModule.resource);
        modulePathList.forEach(e => console.log(e));
      }
      cb();
    }));
  }
}

module.exports = PackageListPlugin;

/**
 * example output
 * 
 * chunk:  main
 * C:\webpack-plugin-example-2018\node_modules\lodash-es\head.js
 * C:\webpack-plugin-example-2018\node_modules\lodash-es\head.js
 * undefined
 * C:\webpack-plugin-example-2018\node_modules\lodash-es\head.js
 * C:\webpack-plugin-example-2018\packages\06-custom-plugin\src\math.js
 * C:\webpack-plugin-example-2018\packages\06-custom-plugin\src\math.js
 * undefined
 * C:\webpack-plugin-example-2018\packages\06-custom-plugin\src\math.js
 * undefined
 * C:\webpack-plugin-example-2018\packages\06-custom-plugin\src\math.js
 * C:\webpack-plugin-example-2018\packages\06-custom-plugin\src\index.js
 * C:\webpack-plugin-example-2018\packages\06-custom-plugin\src\index.js
 * undefined
 * undefined
 */
