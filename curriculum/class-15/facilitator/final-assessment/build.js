const fs = require('fs');
const ncp = require('ncp').ncp;
const sample = require('lodash.sample');
const rimraf = require("rimraf");
const archiver = require('archiver');
const minimist = require('minimist');
const inquirer = require('inquirer');

const source = __dirname;

ncp.limit = 16;

inquirer
  .prompt([
    {
      type: 'input',
      name: 'target',
      message: "Into which folder do you want the test files created?",
      default: function () {
        return './builds';
      },
    },
    {
      type: 'input',
      name: 'students',
      message: "Students names, separated with a space"
    },
  ])
  .then(answers => {
    const target = answers.target.replace(/\/$/g, '');
    const students = answers.students ? answers.students.trim().split(' ') : [];
    students.forEach(student => build(student, target));
  })
  .catch(error => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else when wrong
    }
  });


function build(student, target) {

  console.log(`⚡ building test for ${student}`);

  fs.mkdirSync(`${target}/${student}`, { recursive: true });

  ncp(`${source}/finalExamApp`, `${target}/${student}/finalExamApp`, { clobber: true }, function (err) {

    if (err) {
      return console.error(err);
    }

    console.log('✅ finalExamApp Copied');


    ncp(`${source}/finalExamQuestions`, `${target}/${student}/finalExamQuestions`, { clobber: true, stopOnErr: true }, function (err) {

      if (err) {
        return console.error(err);
      }

      console.log('✅ finalExamQuestions Copied');

      // prune out unwanted questions (randomly)
      keepOne(`${target}/${student}/finalExamQuestions/1-serverReview`);
      keepOne(`${target}/${student}/finalExamQuestions/2-jQueryChallenge`);
      keepOne(`${target}/${student}/finalExamQuestions/3-jQueryReview`);

      const either = [
        ['4-jQueryTemplatingChallenge', '6-mustacheReview'],
        ['5-jQueryTemplatingReview', '7-mustacheChallenge']
      ];

      const eitherToKill = sample(either);

      eitherToKill.forEach(subFolder => {
        console.log(`🗑️  not choosing ${subFolder}`);
        console.log(`... ${target}/${student}/finalExamQuestions/${subFolder}`)
        rimraf.sync(`${target}/${student}/finalExamQuestions/${subFolder}`);
      });

      zipFolder(student, target)
        .then(result => {
          rimraf.sync(`${target}/${student}`);
          console.log('Created .zip');
        })

    });

  });
}

function zipFolder(student, target) {

  const folder = `${target}/${student}`;
  const file = `${target}/${student}.zip`

  const archive = archiver('zip', { zlib: { level: 9 } });
  const stream = fs.createWriteStream(file);

  return new Promise((resolve, reject) => {
    archive
      .directory(folder, student)
      .on('error', err => reject(err))
      .pipe(stream);

    stream.on('close', () => resolve());
    archive.finalize();
  });
}

function keepOne(folder) {
  const questions = fs.readdirSync(folder);
  const keep = sample(questions);
  questions.forEach(filename => {
    if (filename !== keep) {
      fs.unlinkSync(`${folder}/${filename}`)
    }
  })
  console.log(`✅ Kept ${keep}`);
}
