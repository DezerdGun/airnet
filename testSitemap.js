const { XMLParser, XMLBuilder, XMLValidator } = require('fast-xml-parser')
const fs = require('fs')
const parser = new XMLParser()
const XMLdata = fs.readFileSync('public/sitemap-0.xml', 'utf8')
let jObj = parser.parse(XMLdata)

async function checkSitemap() {
  console.log('SiteMap check started')
  for (const url of jObj.urlset.url) {
    let resp = {}
    try {
      const resp = await fetch(url.loc)
      console.log(resp.status, url.loc)
      if (resp.status === 404) {
        console.error('404', url.loc)
      }
    } catch (error) {
      console.error('Error', url.loc)
      console.error('Error', error.message)
    }
  }
  console.log('SiteMap check finished')
}

module.exports = { checkSitemap }
