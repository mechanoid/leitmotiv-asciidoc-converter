const asciidoctor = require('asciidoctor.js')

class AsciiDocConverter {
  constructor (engine) {
    this.engine = engine
  }

  render (content) {
    return this.engine && this.engine.convert(content)
  }
}

const converter = new AsciiDocConverter(asciidoctor())

module.exports = (leitmotiv) => {
  leitmotiv.converters['adoc'] = (node) => {
    node.content = converter.render(node.content.toString())
    return node
  }
}
