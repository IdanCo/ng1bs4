'use strict';
const fs = require('fs');
const colors = require('colors');

module.exports.addComponentToModule = function(filename, variableSuffix, importPrefix, importSuffix, componentName, camelName, capitalName) {
  // making an attempt to fit in with yeoman
  console.log('   modify'.green, filename);

  // read the file
  let content = fs.readFileSync(filename, 'utf8');

  // TODO use this for safety https://github.com/sindresorhus/detect-newline
  const eol = '\n';

  // find the import statements
  const importMatches = content.match(new RegExp(`(import [A-z]+${variableSuffix} from '.*';${eol})`, 'gm'));
  const lastImport = importMatches[importMatches.length - 1];

  // append our import after the last one
  const newImport = `import ${capitalName}${variableSuffix} from './${importPrefix}${componentName}/${componentName}${importSuffix}.module';${eol}`;
  content = content.replace(lastImport, `${lastImport}${newImport}`);

  // extract module name from lastImport
  const moduleNameMatches = lastImport.match(new RegExp(`import (.*)${variableSuffix}`));
  const lastDependencyWithRegExp = `    ${moduleNameMatches[1]}${variableSuffix},?${eol}`;
  const newDependency = `    ${capitalName}${variableSuffix},${eol}`;

  // since we're not enforcing comma-dangle:always, this is trickier than it needs to be
  content = content.replace(new RegExp(lastDependencyWithRegExp), `${lastDependencyWithRegExp.replace('?', '')}${newDependency}`);

  fs.writeFileSync(filename, content, 'utf8');
  return true;
};

module.exports.addComponentToDemoHtml = function(componentName, camelName, capitalName) {
  // read the file
  const filename = './src/docs/docs.html';
  let content = fs.readFileSync(filename, 'utf8');

  // making an attempt to fit in with yeoman
  console.log('   modify'.green, filename);
  
  // TODO use this for safety https://github.com/sindresorhus/detect-newline
  const eol = '\n';

  // find the last instance of </demo> and add our stuff after it
  const demoCloser = `</demo>${eol}`;
  const position = content.lastIndexOf(demoCloser) + demoCloser.length;

  const titleName = capitalName.replace(/([A-Z])/g, ' $1').trim();
  const newDemo = `        <h1>${titleName}</h1>
        <demo>
            <${componentName}-demo></${componentName}-demo>
        </demo>${eol}`;

  content = `${content.slice(0, position)}${newDemo}${content.slice(position)}`;

  fs.writeFileSync(filename, content, 'utf8');
  return true;
};
