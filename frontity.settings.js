const settings = {
  "name": "labre-demo",
  "state": {
    "frontity": {
      "url": "https://test.frontity.org",
      "title": "LABRE",
      "description": "Exploring Fronty as Headless WordPress"
    }
  },
  "packages": [
    {
      "name": "@frontity/labre-theme",
      "state": {
        "theme": {
          "menu": [
            ["Home", "/"],
            ["Block", "/category/block/"],
            ["Classic", "/category/classic/"],
            ["Alignments", "/tag/alignment-2/"],
            ["About", "/about/"]
          ],
          "featured": {
            "showOnList": false,
            "showOnPost": false
          }
        }
      }
    },
    {
      "name": "@frontity/wp-source",
      "state": {
        "source": {
          "api": "http://frontitytest.local/wp-json"
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react"
  ]
};

export default settings;
