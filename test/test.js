const quickgo = require('../src/quickgo')

quickgo.GAnnotation({
    goid: 'GO:0047497',
    format: 'tsv',
    col: 'proteinDB'
  })
  .then((body) => console.log(body))
  .catch((err) => console.error(err))
