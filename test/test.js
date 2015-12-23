const quickgo = require('../src/quickgo')

// quickgo.GAnnotationAsync({
//     goid: 'GO:0047497',
//     format: 'tsv'
//   })
//   .then((body) => console.log(body))
//   .catch((err) => console.error(err))

quickgo.GAnnotation({
    goid: 'GO:0047497',
    format: 'tsv'
  })
  .pipe(process.stdout)
