export default {
  "title": "ThingsPro",
  "tagline": "Oh. So. Pro",
  "url": "https://your-docusaurus-test-site.com",
  "baseUrl": "/",
  "onBrokenLinks": "throw",
  "onBrokenMarkdownLinks": "warn",
  "favicon": "img/favicon.ico",
  "organizationName": "facebook",
  "projectName": "docusaurus",
  "presets": [
    [
      "@docusaurus/preset-classic",
      {
        "docs": {
          "sidebarPath": "/Users/justincptung/Documents/Works/tpe/tpe-web-site/docusaurus-tpe/sidebars.json",
          "editUrl": "https://github.com/facebook/docusaurus/edit/main/website/"
        },
        "blog": {
          "showReadingTime": true,
          "editUrl": "https://github.com/facebook/docusaurus/edit/main/website/blog/"
        },
        "theme": {
          "customCss": "/Users/justincptung/Documents/Works/tpe/tpe-web-site/docusaurus-tpe/src/css/custom.css"
        }
      }
    ],
    [
      "redocusaurus",
      {
        "debug": false,
        "specs": [
          {
            "spec": "openapi/core/index.yaml",
            "specUrl": "/openapi/core/index.yaml",
            "routePath": "/core-api/"
          },
          {
            "spec": "openapi/cloud/index.yaml",
            "specUrl": "/openapi/cloud/index.yaml",
            "routePath": "/cloud-api/"
          },
          {
            "spec": "openapi/taghub/index.yaml",
            "specUrl": "/openapi/taghub/index.yaml",
            "routePath": "/taghub-api/"
          },
          {
            "spec": "openapi/thingspro-agent/swagger.yaml",
            "specUrl": "/openapi/thingspro-agent/swagger.yaml",
            "routePath": "/agent-api/"
          },
          {
            "spec": "openapi/device/index.yaml",
            "specUrl": "/openapi/device/index.yaml",
            "routePath": "/device-api/"
          }
        ],
        "theme": {
          "primaryColor": "#008787",
          "redocOptions": {
            "hideDownloadButton": false
          }
        }
      }
    ]
  ],
  "themeConfig": {
    "navbar": {
      "title": "ThingsPro Edge",
      "logo": {
        "src": "img/thingspro2.png"
      },
      "items": [
        {
          "to": "release-notes",
          "label": "Release Note",
          "position": "left"
        },
        {
          "to": "blog",
          "label": "Blog",
          "position": "left"
        },
        {
          "type": "dropdown",
          "label": "OpenAPI",
          "position": "left",
          "items": [
            {
              "to": "/core-api/",
              "label": "Core"
            },
            {
              "to": "/cloud-api/",
              "label": "Cloud"
            },
            {
              "to": "/taghub-api/",
              "label": "TagHub"
            },
            {
              "to": "/device-api/",
              "label": "Device"
            },
            {
              "to": "/agent-api/",
              "label": "agent-api"
            }
          ]
        },
        {
          "type": "doc",
          "docId": "intro/what-is-TPE",
          "position": "left",
          "label": "Documentation"
        },
        {
          "type": "docsVersionDropdown",
          "position": "right",
          "dropdownItemsAfter": [],
          "dropdownActiveClassDisabled": true,
          "dropdownItemsBefore": []
        }
      ],
      "hideOnScroll": false
    },
    "footer": {
      "style": "dark",
      "links": [
        {
          "title": "Docs",
          "items": [
            {
              "label": "Tutorial",
              "to": "/docs/intro/what-is-TPE"
            }
          ]
        },
        {
          "title": "Community",
          "items": [
            {
              "label": "Stack Overflow",
              "href": "https://stackoverflow.com/questions/tagged/docusaurus"
            },
            {
              "label": "Discord",
              "href": "https://discordapp.com/invite/docusaurus"
            },
            {
              "label": "Twitter",
              "href": "https://twitter.com/docusaurus"
            }
          ]
        },
        {
          "title": "More",
          "items": [
            {
              "label": "Blog",
              "to": "/blog"
            },
            {
              "label": "GitHub",
              "href": "https://github.com/facebook/docusaurus"
            }
          ]
        }
      ],
      "copyright": "Copyright © 2021 My Project, Inc. Built with Docusaurus."
    },
    "prism": {
      "theme": {
        "plain": {
          "color": "#393A34",
          "backgroundColor": "#f6f8fa"
        },
        "styles": [
          {
            "types": [
              "comment",
              "prolog",
              "doctype",
              "cdata"
            ],
            "style": {
              "color": "#999988",
              "fontStyle": "italic"
            }
          },
          {
            "types": [
              "namespace"
            ],
            "style": {
              "opacity": 0.7
            }
          },
          {
            "types": [
              "string",
              "attr-value"
            ],
            "style": {
              "color": "#e3116c"
            }
          },
          {
            "types": [
              "punctuation",
              "operator"
            ],
            "style": {
              "color": "#393A34"
            }
          },
          {
            "types": [
              "entity",
              "url",
              "symbol",
              "number",
              "boolean",
              "variable",
              "constant",
              "property",
              "regex",
              "inserted"
            ],
            "style": {
              "color": "#36acaa"
            }
          },
          {
            "types": [
              "atrule",
              "keyword",
              "attr-name",
              "selector"
            ],
            "style": {
              "color": "#00a4db"
            }
          },
          {
            "types": [
              "function",
              "deleted",
              "tag"
            ],
            "style": {
              "color": "#d73a49"
            }
          },
          {
            "types": [
              "function-variable"
            ],
            "style": {
              "color": "#6f42c1"
            }
          },
          {
            "types": [
              "tag",
              "selector",
              "keyword"
            ],
            "style": {
              "color": "#00009f"
            }
          }
        ]
      },
      "darkTheme": {
        "plain": {
          "color": "#F8F8F2",
          "backgroundColor": "#282A36"
        },
        "styles": [
          {
            "types": [
              "prolog",
              "constant",
              "builtin"
            ],
            "style": {
              "color": "rgb(189, 147, 249)"
            }
          },
          {
            "types": [
              "inserted",
              "function"
            ],
            "style": {
              "color": "rgb(80, 250, 123)"
            }
          },
          {
            "types": [
              "deleted"
            ],
            "style": {
              "color": "rgb(255, 85, 85)"
            }
          },
          {
            "types": [
              "changed"
            ],
            "style": {
              "color": "rgb(255, 184, 108)"
            }
          },
          {
            "types": [
              "punctuation",
              "symbol"
            ],
            "style": {
              "color": "rgb(248, 248, 242)"
            }
          },
          {
            "types": [
              "string",
              "char",
              "tag",
              "selector"
            ],
            "style": {
              "color": "rgb(255, 121, 198)"
            }
          },
          {
            "types": [
              "keyword",
              "variable"
            ],
            "style": {
              "color": "rgb(189, 147, 249)",
              "fontStyle": "italic"
            }
          },
          {
            "types": [
              "comment"
            ],
            "style": {
              "color": "rgb(98, 114, 164)"
            }
          },
          {
            "types": [
              "attr-name"
            ],
            "style": {
              "color": "rgb(241, 250, 140)"
            }
          }
        ]
      },
      "additionalLanguages": []
    },
    "colorMode": {
      "defaultMode": "light",
      "disableSwitch": false,
      "respectPrefersColorScheme": false,
      "switchConfig": {
        "darkIcon": "🌜",
        "darkIconStyle": {},
        "lightIcon": "🌞",
        "lightIconStyle": {}
      }
    },
    "docs": {
      "versionPersistence": "localStorage"
    },
    "metadatas": [],
    "hideableSidebar": false
  },
  "baseUrlIssueBanner": true,
  "i18n": {
    "defaultLocale": "en",
    "locales": [
      "en"
    ],
    "localeConfigs": {}
  },
  "onDuplicateRoutes": "warn",
  "customFields": {},
  "plugins": [],
  "themes": [],
  "titleDelimiter": "|",
  "noIndex": false
};