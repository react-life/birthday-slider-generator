import fs from 'fs';
import path from 'path';
import { createInterface } from 'readline';

/* eslint-disable no-console */
const rl = createInterface(process.stdin, process.stdout);

/* eslint-disable global-require */
const fileSources = {
  index: {
    content: fs.readFileSync('./.template/index.js', { encoding: 'utf-8' }),
    file: () => 'index.js',
  },
  container: {
    content: fs.readFileSync('./.template/container.js', { encoding: 'utf-8' }),
    file: (_, BlockName) => `${BlockName}.js`,
  },
  component: {
    content: fs.readFileSync('./.template/component.js', { encoding: 'utf-8' }),
    file: (_, BlockName) => `${BlockName}.js`,
  },
  test: {
    content: fs.readFileSync('./.template/template.test.js', { encoding: 'utf-8' }),
    file: (_, BlockName) => `${BlockName}.test.js`,
  },
  story: {
    content: fs.readFileSync('./.template/component.story.js', { encoding: 'utf-8' }),
    file: (_, BlockName) => `${BlockName}.story.js`,
  },
  sss: {
    content: fs.readFileSync('./.template/template.sss', { encoding: 'utf-8' }),
    file: (_, BlockName) => `${BlockName}.sss`,
  },
};

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function validateBlockName(blockName) {
  return new Promise((resolve, reject) => {
    const isValid = /^(\d|\w|-)+$/.test(blockName);

    if (isValid) {
      resolve(isValid);
    } else {
      const errMsg = (
        `ERR>>> An incorrect block name '${blockName}'\n` +
        'ERR>>> A block name must include letters, numbers & the minus symbol.'
      );
      reject(errMsg);
    }
  });
}

function directoryExist(blockPath, blockName) {
  return new Promise((resolve, reject) => {
    fs.stat(blockPath, notExist => {
      if (notExist) {
        resolve();
      } else {
        reject(`ERR>>> The block '${blockName}' already exists.`);
      }
    });
  });
}

function createDir(dirPath) {
  return new Promise((resolve, reject) => {
    fs.mkdir(dirPath, err => {
      if (err) {
        reject(`ERR>>> Failed to create a folder '${dirPath}'`);
      } else {
        resolve();
      }
    });
  });
}

function createFiles(blocksPath, blockName, type) {
  const promises = [];
  const isContainer = type === 'container';

  Object.keys(fileSources).forEach(key => {
    if (isContainer && (key === 'sss' || key === 'component' || key === 'story')) {
      return;
    }

    if (!isContainer && key === 'container') {
      return;
    }

    const fileSource = fileSources[key].content
      .replace(/\{blockName}/g, blockName)
      .replace(/\{BlockName}/g, capitalizeFirstLetter(blockName));

    const filename = fileSources[key].file(blockName, capitalizeFirstLetter(blockName));
    const filePath = path.join(blocksPath, filename);

    promises.push(
        new Promise((resolve, reject) => {
          fs.writeFile(filePath, fileSource, 'utf8', err => {
            if (err) {
              reject(`ERR>>> Failed to create a file '${filePath}'`);
            } else {
              resolve();
            }
          });
        })
    );
  });

  return Promise.all(promises);
}

function getFiles(blockPath) {
  return new Promise((resolve, reject) => {
    fs.readdir(blockPath, (err, files) => {
      if (err) {
        reject(`ERR>>> Failed to get a file list from a folder '${blockPath}'`);
      } else {
        resolve(files);
      }
    });
  });
}

function printErrorMessage(errText) {
  console.log(errText);
  rl.close();
}

// //////////////////////////////////////////////////////////////////////////

function initMakeBlock(type, blockName) {
  console.log(type, blockName);

  const BLOCKS_DIR = path.join(__dirname, `src/${type}s`);

  const blockPath = path.join(BLOCKS_DIR, capitalizeFirstLetter(blockName));

  return validateBlockName(blockName)
    .then(() => directoryExist(blockPath, blockName))
    .then(() => createDir(blockPath))
    .then(() => createFiles(blockPath, blockName, type))
    .then(() => getFiles(blockPath))
    .then(files => {
      const line = '-'.repeat(48 + blockName.length);
      console.log(line);
      console.log(`The block has just been created in ${BLOCKS_DIR}/${blockName}'`);
      console.log(line);

      // Displays a list of files created
      files.forEach(file => console.log(file));

      rl.close();
    });
}


initMakeBlock(process.argv[2], process.argv[3])
  .catch(printErrorMessage);
