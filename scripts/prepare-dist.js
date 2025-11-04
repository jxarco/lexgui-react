import fs from 'fs'
import path from 'path'

const distDir = path.resolve('./dist')

// ensure dist exists
if (!fs.existsSync(distDir)) {
  fs.mkdirSync(distDir)
}

// create a minimal package.json
const pkg = {
  name: 'lexgui-react',
  version: '0.0.1',
  main: './index.umd.cjs',
  module: './index.js',
  types: './index.d.ts',
  exports: {
    '.': {
      import: './index.js',
      require: './index.umd.cjs',
      types: './index.d.ts'
    }
  },
  peerDependencies: {
    react: '>=18.0.0',
    'react-dom': '>=18.0.0'
  }
}

fs.writeFileSync(path.join(distDir, 'package.json'), JSON.stringify(pkg, null, 2))
console.log('✅ dist/package.json created successfully!')

fs.copyFileSync('README.md', path.join(distDir, 'README.md'))
fs.copyFileSync('LICENSE', path.join(distDir, 'LICENSE'))
