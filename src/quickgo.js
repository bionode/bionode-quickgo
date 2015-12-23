'use strict'

const request = require('request')
const requestAsync = require('request-promise')

/**
 * Access EBI QuickGO REST API with promises and streams.
 * @module bionode-quickgo
 */


const baseUri = 'http://www.ebi.ac.uk/QuickGO/'
const method = 'POST'

function annotationRequest(fields) {
  const uri = baseUri + 'GAnnotation'

  /**
   * @name format
   * @desc Download file format
   * @type {String}
   * @default gaf
   * @example gaf, gpa, gene2go, proteinList, fasta, tsv
   */
  const format = fields.format || 'gaf'

  /**
   * @name limit
   * @desc Download limit (number of lines). Note that the default limit is
   * 10,000 rows, which may not be sufficient for the data set that you are
   * downloading. To bypass this default, and return the entire data set,
   * specify a limit of -1.
   * @type {String}
   * @default ''
   * @example 9001, -1
   */
  const limit = fields.limit || ''

  /**
   * @name gz
   * @desc gzips the downloaded file
   * @type {String}
   * @default false
   * @example false, true
   */
  const gz = fields.gz || 'false'

  /**
   * @name goid
   * @desc GO identifiers either directly or indirectly (descendant GO
   * identifiers) applied in annotations
   * @type {String}
   * @default ''
   * @example GO:0002080
   */
  const goid = fields.goid || ''

  /**
   * @name aspect
   * @desc Use this to limit the annotations returned to a specific ontology or
   * ontologies (Molecular Function, Biological Process or Cellular Component)
   * @type {String}
   * @default ''
   * @example F, P, C
   */
  const aspect = fields.espect || ''

  /**
   * @name relType
   * @desc By default, QuickGO will display annotations to GO terms that are
   * related to that specified in the goid parameter by is_a, part_of and
   * occurs_in relations; this parameter allows you to override that behaviour.
   * See [Ontology Relations](http://geneontology.org/page/ontology-relations).
   * @type {String}
   * @default IPO=
   * @example
   * ? (ancestor)
   * = (indentity)
   * I (is_a)
   * P (part_of)
   * O (occurs_in)
   * R (regulates)
   * + (positively_regulates)
   * - (negatively_regulates)
   */
  const relType = fields.relType || 'IPO='

  /**
   * @name termUse
   * @desc If you set this parameter to slim, then QuickGO will use the
   * supplied set of GO identifiers as a slim and will map the annotations up
   * to these terms. See [here](http://www.ebi.ac.uk/QuickGO/GMultiTerm) for
   * more details. The default behaviour (termUse=ancestor) is to not perform
   * this mapping.
   * @type {String}
   * @default ancestor
   * @example ancestor, slim
   */
  const termUse = fields.termUse || 'ancestor'

  /**
   * @name evidence
   * @desc Annotation evidence code (Ev) category
   * @type {String}
   * @default ''
   * @example IDA, IC, ISS, IEA
   */
  const evidence = fields.evidence || ''

  /**
   * @name source
   * @desc Annotation provider
   * @type {String}
   * @default ''
   * @example UniProtKB, HGNC
   */
  const source = fields.source || ''

  /**
   * @name ref
   * @desc PubMed or GO reference supporting annotation. Can refer to a specific
   * reference identifier or category (for category level, use * after ref type)
   * @type {String}
   * @default ''
   * @example PUBMED:*, GO_REF:0000002, 16262699
   */
  const ref = fields.ref || ''

  /**
   * @name with
   * @desc Additional supporting information supplied in IEA, ISS, IPI, IC
   * evidenced annotations; see:
   * [GO documentation](http://www.geneontology.org/GO.evidence.shtml).
   * Can refer to a specific identifier or category (for category level, use *
   * after with type)
   * @type {String}
   * @default ''
   * @example EC:2.5.1.30, IPR000092, HAMAP:*
   */
  // jsdoc3 throws 'unexpected token with' on 'with'
  const _with = fields.with || ''

  /**
   * @name tax
   * @desc NCBI taxonomic identifer of annotated protein
   * @type {String}
   * @default ''
   * @example 9606
   */
  const tax = fields.tax || ''

  /**
   * @name protein
   * @desc Specifies one or more sequence identifiers or accessions from
   * available database(s) (see DB filter column)
   * @type {String}
   * @default ''
   * @example Mm.363225, P99999
   */
  const protein = fields.protein || ''

  /**
   * @name qualifier
   * @desc Tags that modify the interpretation of an annotation
   * @type {String}
   * @default ''
   * @example NOT, colocalizes_with, contributes_to
   */
  const qualifier = fields.qualifier || ''

  /**
   * @name db
   * @desc Protein database (identifier type)
   * @type {String}
   * @default ''
   * @example UniProtKB, UniGene, Ensembl
   */
  const db = fields.db || ''

  /**
   * @name q
   * @desc Advanced query. Used to customize GO annotation sets using Boolean
   * operators. See [Advanced Annotation Search](http://www.ebi.ac.uk/QuickGO/reference.html#advanced_annotation)
   * @type {String}
   * @default ''
   */
  const q = fields.q || ''

  /**
   * @name col
   * @desc This parameter, which is currently only applicable to the tsv
   * download format, allows you to specify a comma-separated list of columns
   * that you want to be included in the returned data set. The list below shows
   * the available column names; clicking on the name of a column will take you
   * to the description of the column in the QuickGO help file. The default set
   * of columns is shown in bold text.
   * * [**proteinDB**](http://www.ebi.ac.uk/QuickGO/reference.html#annotation-column-proteinDB)
   * * [**proteinID**](http://www.ebi.ac.uk/QuickGO/reference.html#annotation-column-proteinID)
   * * [**proteinSymbol**](http://www.ebi.ac.uk/QuickGO/reference.html#annotation-column-proteinSymbol)
   * * [**qualifier**](http://www.ebi.ac.uk/QuickGO/reference.html#annotation-column-qualifier)
   * * [**goID**](http://www.ebi.ac.uk/QuickGO/reference.html#annotation-column-goID)
   * * [**goName**](http://www.ebi.ac.uk/QuickGO/reference.html#annotation-column-goName)
   * * [**aspect**](http://www.ebi.ac.uk/QuickGO/reference.html#annotation-column-aspect)
   * * [**evidence**](http://www.ebi.ac.uk/QuickGO/reference.html#annotation-column-evidence)
   * * [**ref**](http://www.ebi.ac.uk/QuickGO/reference.html#annotation-column-ref)
   * * [**with**](http://www.ebi.ac.uk/QuickGO/reference.html#annotation-column-with)
   * * [**proteinTaxon**](http://www.ebi.ac.uk/QuickGO/reference.html#annotation-column-proteinTaxon)
   * * [**date**](http://www.ebi.ac.uk/QuickGO/reference.html#annotation-column-date)
   * * [**from**](http://www.ebi.ac.uk/QuickGO/reference.html#annotation-column-from)
   * * [**splice**](http://www.ebi.ac.uk/QuickGO/reference.html#annotation-column-splice)
   * * [proteinName](http://www.ebi.ac.uk/QuickGO/reference.html#annotation-column-proteinName)
   * * [proteinSynonym](http://www.ebi.ac.uk/QuickGO/reference.html#annotation-column-proteinSynonym)
   * * [proteinType](http://www.ebi.ac.uk/QuickGO/reference.html#annotation-column-proteinType)
   * * [proteinTaxonName](http://www.ebi.ac.uk/QuickGO/reference.html#annotation-column-proteinTaxonName)
   * * [orginalTermID](http://www.ebi.ac.uk/QuickGO/reference.html#annotation-column-originalTermID)
   * * [originalGOName](http://www.ebi.ac.uk/QuickGO/reference.html#annotation-column-originalGOName)
   * @type {String}
   * @default 'proteinDB,proteinID,proteinSymbol,qualifier,goID,goName,aspect,evidence,ref,with,proteinTaxon,date,from,splice'
   * @example 'proteinDB,proteinID,goID,goName,aspect'
   */
  const col = fields.col || ''

  const form = {
    format,
    limit,
    gz,
    goid,
    aspect,
    relType,
    termUse,
    evidence,
    source,
    ref,
    with: _with,
      tax,
      protein,
      qualifier,
      db,
      q,
      col
  }

  return {
    method,
    uri,
    form
  }
}

/**
 * QuickGO Annotation service
 * @param {Object} fields valid query fields
 * @return {Promise}
 */
exports.GAnnotationAsync = function (fields) {
  return requestAsync(annotationRequest(fields))
}

/**
 * QuickGO Annotation service
 * @param {Object} fields valid query fields
 * @return {Stream}
 */
exports.GAnnotation = function (fields) {
  return request(annotationRequest(fields))
}

function termRequest(fields) {
  const uri = baseUri + 'GTerm'

  /**
   * @name id
   * @desc GO identifier
   * @type {String}
   * @default none
   * @example GO:0003824
   */
  const id = fields.id

  /**
   * @name format
   * @type {String}
   * @default obo
   * @desc
   * | Format                                                                   | Description                                                       |
   * |:-------------------------------------------------------------------------|:------------------------------------------------------------------|
   * | [mini](http://www.ebi.ac.uk/QuickGO/GTerm?id=GO:0003824&format=mini)     | Mini Mini HTML, suitable for dynamically embedding in popup boxes |
   * | [obo](http://www.ebi.ac.uk/QuickGO/GTerm?id=GO:0003824&format=obo)       | OBO format snippet                                                |
   * | [oboxml](http://www.ebi.ac.uk/QuickGO/GTerm?id=GO:0003824&format=oboxml) | OBO XML format snippet                                            |
   */
  const format = fields.format || 'obo'

  const form = {
    id,
    format
  }

  return {
    method,
    uri,
    form
  }
}

/**
 * GO term information
 * @param {Object} fields valid query fields, id required
 * @returns {Stream}
 */
exports.GTerm = function (fields) {
  if (!fields.id) {
    return 'Did not specify `id`'
  }

  return request(termRequest(fields))
}

/**
 * GO term information
 * @param {Object} fields valid query fields, id required
 * @returns {Promise}
 */
exports.GTermAsync = function (fields) {
  if (!fields.id) {
    return 'Did not specify `id`'
  }

  return requestAsync(termRequest(fields))
}
