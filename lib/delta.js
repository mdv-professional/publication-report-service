export function filterInsertedJobUris(deltas) {
  let newJobUris = [];

  for (let delta of deltas) {
    let inserts = delta.inserts;

    for (let triple of inserts) {
      /* eslint-disable prettier/prettier */
      let isJob =
        triple.predicate.value === 'http://www.w3.org/1999/02/22-rdf-syntax-ns#type' &&
        triple.object.value === 'http://mu.semte.ch/vocabularies/ext/publicatie/PublicationMetricsExportJob';
      /* eslint-enable prettier/prettier */

      if (isJob) {
        let jobUri = triple.subject.value;
        newJobUris.push(jobUri);
      }
    }
  }

  return newJobUris;
}
