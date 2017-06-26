const asciidoctor = require('asciidoctor.js')

class AsciiDocConverter {
  constructor (engine) {
    this.engine = engine
  }

  render (content, attributes = {}) {
    return this.engine && this.engine.convert(content, { attributes })
  }
}

const converter = new AsciiDocConverter(asciidoctor())

module.exports = (leitmotiv) => {
  leitmotiv.converters['adoc'] = (node) => {
    node.content = converter.render(node.content.toString(), node.data)
    return node
  }
}
