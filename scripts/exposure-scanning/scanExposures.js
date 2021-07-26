/* eslint-disable no-console */
/* eslint-disable import/extensions */
import parseArgs from './args/index.js';
import { fetchPr, fetchIssue } from './fetch/index.js';
import { scanPr, scanIssue } from './scan/index.js';
import { patchPr, patchIssue } from './patch/index.js';

const scanExposures = async () => {
  const { repo, flag, id, regexString } = parseArgs(process.argv);

  const regex = new RegExp(regexString, 'gi');

  if (flag === '-pr') {
    const reqBody = {
      owner: 'bbc',
      repo,
      prId: id,
    };

    const pr = await fetchPr(reqBody);

    const scannedPr = await scanPr(pr, regex);

    await patchPr(reqBody, scannedPr);

    if (scannedPr.foundMatch) {
      return Promise.reject(new Error('Match found.'));
    }
  } else if (flag === '-issue') {
    const reqBody = {
      owner: 'bbc',
      repo,
      issueId: id,
    };

    const issue = await fetchIssue(reqBody);

    const scannedIssue = await scanIssue(issue, regex);

    await patchIssue(reqBody, scannedIssue);

    if (scannedIssue.foundMatch) {
      return Promise.reject(new Error('Match found.'));
    }
  }
  return Promise.resolve('No matches found.');
};

export default scanExposures;
