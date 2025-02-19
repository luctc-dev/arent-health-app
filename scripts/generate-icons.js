/* eslint-disable @typescript-eslint/no-require-imports */
const path = require('path')
const fs = require('fs')

const iconsPath = path.join(__dirname, '../icons')
const indexTsPath = path.join(__dirname, '../icons/index.ts')

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

function generateIconImportPath(svgFile) {
  const moduleName = svgFile
    .split('-')
    .map(capitalizeFirstLetter)
    .join('')
    .replace('.svg', '')
  // const importPath = `import ${moduleName} from 'icons/${svgFile}'\n`
  const importPath = `import ${moduleName} from './${svgFile}'\n`

  return {
    moduleName,
    importPath
  }
}

function loadIconsPath() {
  fs.readdir(iconsPath, function (err, files) {
    //handling error
    if (err) {
      return console.log('Unable to scan directory: ' + err)
    }

    let content =
      '// 🔴 DO NOT EDIT — This file is generated.\n'
    let imports = ''
    let exports = ''
    let isDuplicated = false
    const listModuleName = {}

    files
      .filter((file) => file.endsWith('.svg'))
      .forEach((svgFile, idx, arr) => {
        const { moduleName, importPath } = generateIconImportPath(svgFile)

        if (listModuleName[moduleName]) {
          console.error('Duplicate Icon: ' + moduleName, importPath)
          isDuplicated = true
        }

        listModuleName[moduleName] = true
        const comma = arr.length - 1 === idx ? '' : ','

        imports += importPath
        exports += '  ' + moduleName + `${comma}\n`
      })

    if (isDuplicated) {
      return
    }

    exports = `\nexport {\n` + exports + '}\n'

    content += imports
    content += exports

    try {
      fs.writeFileSync(indexTsPath, content)
    } catch (err) {
      console.error(err)
    }
  })
}

loadIconsPath()
