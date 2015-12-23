# bionode-quickgo

Acess EBI QuickGO REST API with promises and streams.

## API Documentation

Access EBI QuickGO REST API with promises and streams.


* [bionode-quickgo](#module_bionode-quickgo)
    * _static_
        * [.GAnnotationAsync(fields)](#module_bionode-quickgo.GAnnotationAsync) ⇒ <code>Promise</code>
        * [.GAnnotation(fields)](#module_bionode-quickgo.GAnnotation) ⇒ <code>Stream</code>
        * [.GTerm(fields)](#module_bionode-quickgo.GTerm) ⇒ <code>Stream</code>
        * [.GTermAsync(fields)](#module_bionode-quickgo.GTermAsync) ⇒ <code>Promise</code>
    * _inner_
        * [~format](#module_bionode-quickgo..format) : <code>String</code>
        * [~limit](#module_bionode-quickgo..limit) : <code>String</code>
        * [~gz](#module_bionode-quickgo..gz) : <code>String</code>
        * [~goid](#module_bionode-quickgo..goid) : <code>String</code>
        * [~aspect](#module_bionode-quickgo..aspect) : <code>String</code>
        * [~relType](#module_bionode-quickgo..relType) : <code>String</code>
        * [~termUse](#module_bionode-quickgo..termUse) : <code>String</code>
        * [~evidence](#module_bionode-quickgo..evidence) : <code>String</code>
        * [~source](#module_bionode-quickgo..source) : <code>String</code>
        * [~ref](#module_bionode-quickgo..ref) : <code>String</code>
        * [~with](#module_bionode-quickgo..with) : <code>String</code>
        * [~tax](#module_bionode-quickgo..tax) : <code>String</code>
        * [~protein](#module_bionode-quickgo..protein) : <code>String</code>
        * [~qualifier](#module_bionode-quickgo..qualifier) : <code>String</code>
        * [~db](#module_bionode-quickgo..db) : <code>String</code>
        * [~q](#module_bionode-quickgo..q) : <code>String</code>
        * [~col](#module_bionode-quickgo..col) : <code>String</code>
        * [~id](#module_bionode-quickgo..id) : <code>String</code>
        * [~format](#module_bionode-quickgo..format) : <code>String</code>
        * [~annotationRequest(fields)](#module_bionode-quickgo..annotationRequest) ⇒ <code>Object</code>
        * [~termRequest(fields)](#module_bionode-quickgo..termRequest) ⇒ <code>Object</code>

<a name="module_bionode-quickgo.GAnnotationAsync"></a>
### bionode-quickgo.GAnnotationAsync(fields) ⇒ <code>Promise</code>
QuickGO Annotation service

**Kind**: static method of <code>[bionode-quickgo](#module_bionode-quickgo)</code>  

| Param | Type | Description |
| --- | --- | --- |
| fields | <code>Object</code> | valid query fields |

<a name="module_bionode-quickgo.GAnnotation"></a>
### bionode-quickgo.GAnnotation(fields) ⇒ <code>Stream</code>
QuickGO Annotation service

**Kind**: static method of <code>[bionode-quickgo](#module_bionode-quickgo)</code>  

| Param | Type | Description |
| --- | --- | --- |
| fields | <code>Object</code> | valid query fields |

<a name="module_bionode-quickgo.GTerm"></a>
### bionode-quickgo.GTerm(fields) ⇒ <code>Stream</code>
GO term information

**Kind**: static method of <code>[bionode-quickgo](#module_bionode-quickgo)</code>  

| Param | Type | Description |
| --- | --- | --- |
| fields | <code>Object</code> | valid query fields, id required |

<a name="module_bionode-quickgo.GTermAsync"></a>
### bionode-quickgo.GTermAsync(fields) ⇒ <code>Promise</code>
GO term information

**Kind**: static method of <code>[bionode-quickgo](#module_bionode-quickgo)</code>  

| Param | Type | Description |
| --- | --- | --- |
| fields | <code>Object</code> | valid query fields, id required |

<a name="module_bionode-quickgo..format"></a>
### bionode-quickgo~format : <code>String</code>
Download file format

**Kind**: inner property of <code>[bionode-quickgo](#module_bionode-quickgo)</code>  
**Default**: <code>gaf</code>  
**Example**  
```js
gaf, gpa, gene2go, proteinList, fasta, tsv
```
<a name="module_bionode-quickgo..limit"></a>
### bionode-quickgo~limit : <code>String</code>
Download limit (number of lines). Note that the default limit is
10,000 rows, which may not be sufficient for the data set that you are
downloading. To bypass this default, and return the entire data set,
specify a limit of -1.

**Kind**: inner property of <code>[bionode-quickgo](#module_bionode-quickgo)</code>  
**Default**: <code>&#x27;&#x27;</code>  
**Example**  
```js
9001, -1
```
<a name="module_bionode-quickgo..gz"></a>
### bionode-quickgo~gz : <code>String</code>
gzips the downloaded file

**Kind**: inner property of <code>[bionode-quickgo](#module_bionode-quickgo)</code>  
**Default**: <code>false</code>  
**Example**  
```js
false, true
```
<a name="module_bionode-quickgo..goid"></a>
### bionode-quickgo~goid : <code>String</code>
GO identifiers either directly or indirectly (descendant GO
identifiers) applied in annotations

**Kind**: inner property of <code>[bionode-quickgo](#module_bionode-quickgo)</code>  
**Default**: <code>&#x27;&#x27;</code>  
**Example**  
```js
GO:0002080
```
<a name="module_bionode-quickgo..aspect"></a>
### bionode-quickgo~aspect : <code>String</code>
Use this to limit the annotations returned to a specific ontology or
ontologies (Molecular Function, Biological Process or Cellular Component)

**Kind**: inner property of <code>[bionode-quickgo](#module_bionode-quickgo)</code>  
**Default**: <code>&#x27;&#x27;</code>  
**Example**  
```js
F, P, C
```
<a name="module_bionode-quickgo..relType"></a>
### bionode-quickgo~relType : <code>String</code>
By default, QuickGO will display annotations to GO terms that are
related to that specified in the goid parameter by is_a, part_of and
occurs_in relations; this parameter allows you to override that behaviour.
See [Ontology Relations](http://geneontology.org/page/ontology-relations).

**Kind**: inner property of <code>[bionode-quickgo](#module_bionode-quickgo)</code>  
**Default**: <code>IPO=</code>  
**Example**  
```js
? (ancestor)
= (indentity)
I (is_a)
P (part_of)
O (occurs_in)
R (regulates)
+ (positively_regulates)
- (negatively_regulates)
```
<a name="module_bionode-quickgo..termUse"></a>
### bionode-quickgo~termUse : <code>String</code>
If you set this parameter to slim, then QuickGO will use the
supplied set of GO identifiers as a slim and will map the annotations up
to these terms. See [here](http://www.ebi.ac.uk/QuickGO/GMultiTerm) for
more details. The default behaviour (termUse=ancestor) is to not perform
this mapping.

**Kind**: inner property of <code>[bionode-quickgo](#module_bionode-quickgo)</code>  
**Default**: <code>ancestor</code>  
**Example**  
```js
ancestor, slim
```
<a name="module_bionode-quickgo..evidence"></a>
### bionode-quickgo~evidence : <code>String</code>
Annotation evidence code (Ev) category

**Kind**: inner property of <code>[bionode-quickgo](#module_bionode-quickgo)</code>  
**Default**: <code>&#x27;&#x27;</code>  
**Example**  
```js
IDA, IC, ISS, IEA
```
<a name="module_bionode-quickgo..source"></a>
### bionode-quickgo~source : <code>String</code>
Annotation provider

**Kind**: inner property of <code>[bionode-quickgo](#module_bionode-quickgo)</code>  
**Default**: <code>&#x27;&#x27;</code>  
**Example**  
```js
UniProtKB, HGNC
```
<a name="module_bionode-quickgo..ref"></a>
### bionode-quickgo~ref : <code>String</code>
PubMed or GO reference supporting annotation. Can refer to a specific
reference identifier or category (for category level, use * after ref type)

**Kind**: inner property of <code>[bionode-quickgo](#module_bionode-quickgo)</code>  
**Default**: <code>&#x27;&#x27;</code>  
**Example**  
```js
PUBMED:*, GO_REF:0000002, 16262699
```
<a name="module_bionode-quickgo..with"></a>
### bionode-quickgo~with : <code>String</code>
Additional supporting information supplied in IEA, ISS, IPI, IC
evidenced annotations; see:
[GO documentation](http://www.geneontology.org/GO.evidence.shtml).
Can refer to a specific identifier or category (for category level, use *
after with type)

**Kind**: inner property of <code>[bionode-quickgo](#module_bionode-quickgo)</code>  
**Default**: <code>&#x27;&#x27;</code>  
**Example**  
```js
EC:2.5.1.30, IPR000092, HAMAP:*
```
<a name="module_bionode-quickgo..tax"></a>
### bionode-quickgo~tax : <code>String</code>
NCBI taxonomic identifer of annotated protein

**Kind**: inner property of <code>[bionode-quickgo](#module_bionode-quickgo)</code>  
**Default**: <code>&#x27;&#x27;</code>  
**Example**  
```js
9606
```
<a name="module_bionode-quickgo..protein"></a>
### bionode-quickgo~protein : <code>String</code>
Specifies one or more sequence identifiers or accessions from
available database(s) (see DB filter column)

**Kind**: inner property of <code>[bionode-quickgo](#module_bionode-quickgo)</code>  
**Default**: <code>&#x27;&#x27;</code>  
**Example**  
```js
Mm.363225, P99999
```
<a name="module_bionode-quickgo..qualifier"></a>
### bionode-quickgo~qualifier : <code>String</code>
Tags that modify the interpretation of an annotation

**Kind**: inner property of <code>[bionode-quickgo](#module_bionode-quickgo)</code>  
**Default**: <code>&#x27;&#x27;</code>  
**Example**  
```js
NOT, colocalizes_with, contributes_to
```
<a name="module_bionode-quickgo..db"></a>
### bionode-quickgo~db : <code>String</code>
Protein database (identifier type)

**Kind**: inner property of <code>[bionode-quickgo](#module_bionode-quickgo)</code>  
**Default**: <code>&#x27;&#x27;</code>  
**Example**  
```js
UniProtKB, UniGene, Ensembl
```
<a name="module_bionode-quickgo..q"></a>
### bionode-quickgo~q : <code>String</code>
Advanced query. Used to customize GO annotation sets using Boolean
operators. See [Advanced Annotation Search](http://www.ebi.ac.uk/QuickGO/reference.html#advanced_annotation)

**Kind**: inner property of <code>[bionode-quickgo](#module_bionode-quickgo)</code>  
**Default**: <code>&#x27;&#x27;</code>  
<a name="module_bionode-quickgo..col"></a>
### bionode-quickgo~col : <code>String</code>
This parameter, which is currently only applicable to the tsv
download format, allows you to specify a comma-separated list of columns
that you want to be included in the returned data set. The list below shows
the available column names; clicking on the name of a column will take you
to the description of the column in the QuickGO help file. The default set
of columns is shown in bold text.
* [**proteinDB**](http://www.ebi.ac.uk/QuickGO/reference.html#annotation-column-proteinDB)
* [**proteinID**](http://www.ebi.ac.uk/QuickGO/reference.html#annotation-column-proteinID)
* [**proteinSymbol**](http://www.ebi.ac.uk/QuickGO/reference.html#annotation-column-proteinSymbol)
* [**qualifier**](http://www.ebi.ac.uk/QuickGO/reference.html#annotation-column-qualifier)
* [**goID**](http://www.ebi.ac.uk/QuickGO/reference.html#annotation-column-goID)
* [**goName**](http://www.ebi.ac.uk/QuickGO/reference.html#annotation-column-goName)
* [**aspect**](http://www.ebi.ac.uk/QuickGO/reference.html#annotation-column-aspect)
* [**evidence**](http://www.ebi.ac.uk/QuickGO/reference.html#annotation-column-evidence)
* [**ref**](http://www.ebi.ac.uk/QuickGO/reference.html#annotation-column-ref)
* [**with**](http://www.ebi.ac.uk/QuickGO/reference.html#annotation-column-with)
* [**proteinTaxon**](http://www.ebi.ac.uk/QuickGO/reference.html#annotation-column-proteinTaxon)
* [**date**](http://www.ebi.ac.uk/QuickGO/reference.html#annotation-column-date)
* [**from**](http://www.ebi.ac.uk/QuickGO/reference.html#annotation-column-from)
* [**splice**](http://www.ebi.ac.uk/QuickGO/reference.html#annotation-column-splice)
* [proteinName](http://www.ebi.ac.uk/QuickGO/reference.html#annotation-column-proteinName)
* [proteinSynonym](http://www.ebi.ac.uk/QuickGO/reference.html#annotation-column-proteinSynonym)
* [proteinType](http://www.ebi.ac.uk/QuickGO/reference.html#annotation-column-proteinType)
* [proteinTaxonName](http://www.ebi.ac.uk/QuickGO/reference.html#annotation-column-proteinTaxonName)
* [orginalTermID](http://www.ebi.ac.uk/QuickGO/reference.html#annotation-column-originalTermID)
* [originalGOName](http://www.ebi.ac.uk/QuickGO/reference.html#annotation-column-originalGOName)

**Kind**: inner property of <code>[bionode-quickgo](#module_bionode-quickgo)</code>  
**Default**: <code>&#x27;proteinDB,proteinID,proteinSymbol,qualifier,goID,goName,aspect,evidence,ref,with,proteinTaxon,date,from,splice&#x27;</code>  
**Example**  
```js
'proteinDB,proteinID,goID,goName,aspect'
```
<a name="module_bionode-quickgo..id"></a>
### bionode-quickgo~id : <code>String</code>
GO identifier

**Kind**: inner property of <code>[bionode-quickgo](#module_bionode-quickgo)</code>  
**Default**: <code>none</code>  
**Example**  
```js
GO:0003824
```
<a name="module_bionode-quickgo..format"></a>
### bionode-quickgo~format : <code>String</code>
| Format                                                                   | Description                                                       |
|:-------------------------------------------------------------------------|:------------------------------------------------------------------|
| [mini](http://www.ebi.ac.uk/QuickGO/GTerm?id=GO:0003824&format=mini)     | Mini Mini HTML, suitable for dynamically embedding in popup boxes |
| [obo](http://www.ebi.ac.uk/QuickGO/GTerm?id=GO:0003824&format=obo)       | OBO format snippet                                                |
| [oboxml](http://www.ebi.ac.uk/QuickGO/GTerm?id=GO:0003824&format=oboxml) | OBO XML format snippet                                            |

**Kind**: inner property of <code>[bionode-quickgo](#module_bionode-quickgo)</code>  
**Default**: <code>obo</code>  
<a name="module_bionode-quickgo..annotationRequest"></a>
### bionode-quickgo~annotationRequest(fields) ⇒ <code>Object</code>
generate an annotation request object

**Kind**: inner method of <code>[bionode-quickgo](#module_bionode-quickgo)</code>  
**Returns**: <code>Object</code> - {{method, uri, form} object for request}  

| Param | Type | Description |
| --- | --- | --- |
| fields | <code>Object</code> | valid query fields |

<a name="module_bionode-quickgo..termRequest"></a>
### bionode-quickgo~termRequest(fields) ⇒ <code>Object</code>
generate an term request object

**Kind**: inner method of <code>[bionode-quickgo](#module_bionode-quickgo)</code>  
**Returns**: <code>Object</code> - {{method, uri, form} object for request}  

| Param | Type | Description |
| --- | --- | --- |
| fields | <code>Object</code> | valid query fields |


## License

MIT [http://jmazz.mit-license.org](http://jmazz.mit-license.org)
