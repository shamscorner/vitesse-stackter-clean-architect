import fs from 'fs'
import path from 'path'

const patchPkg = (name: string, data: any) => {
  const pkgPath = path.resolve('node_modules', name, 'package.json')

  const pkg = JSON.parse(fs.readFileSync(pkgPath, { encoding: 'utf-8' }))

  if (typeof pkg.exports !== 'undefined')
    return

  const patchedPkg = {
    ...pkg,
    ...data,
  }

  fs.writeFileSync(pkgPath, JSON.stringify(patchedPkg, null, 2), { encoding: 'utf-8' })
}

patchPkg('@vue/apollo-composable', {
  type: 'module',
  sideEffects: false,
  exports: {
    '.': {
      require: './dist/index.js',
      import: './dist/index.esm.js',
      types: 'dist/index.d.ts',
    },
  },
})

patchPkg('@apollo/client/core', {
  exports: {
    '.': {
      require: './core.cjs',
      import: './index.js',
      types: './index.d.ts',
    },
  },
})

patchPkg('@apollo/client', {
  exports: {
    '.': {
      import: './index.js',
      require: './main.cjs',
      types: './index.d.ts',
    },
    './core': {
      import: './index.js',
      require: './core.cjs',
      types: './index.d.ts',
    },
    './react': {
      import: './react/index.js',
      require: './react/react.cjs',
      types: './react/index.d.ts',
    },
    './react/context': {
      import: './react/context/index.js',
      require: './react/context/context.cjs',
      types: './react/context/index.d.ts',
    },
    './*': './*',
  },
})
