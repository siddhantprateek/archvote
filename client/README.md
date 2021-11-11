
### Add Auth Configuration to by make `src\auth_config.json` file
```

{
  "domain": "YOUR AUTH DOMAIN",
  "clientId": "YOUR AUTH CLIENT ID",
  "audience": "YOUR AUDIENCE"
}

```
### `Client` folder Structure
```
public\
src\
├── App.css
├── App.js
├── App.test.js
├── assets
│   ├── images
│   │   └── triangle-48.png
│   └── logo
│       ├── icons8-triangle-48.png
│       ├── logo.png
│       └── logo.svg
├── components
│   ├── badge
│   │   ├── badge.component.jsx
│   │   └── badge.styles.css
│   ├── badge-list
│   │   ├── badge-list.component.jsx
│   │   └── badge-list.styles.css
│   ├── filter
│   │   ├── filterBadge.component.jsx
│   │   └── filterBadge.styles.css
│   ├── header
│   │   ├── header.component.jsx
│   │   └── header.styles.css
│   ├── join-component
│   │   ├── join.components.jsx
│   │   └── join.styles.css
│   └── tag
│       ├── tag.component.jsx
│       └── tag.styles.jsx
├── index.css
├── index.js
├── logo.svg
├── pages
│   ├── contact
│   │   └── contact.pages.jsx
│   ├── home
│   │   └── home.pages.jsx
│   └── join
│       └── join.pages.jsx
├── reportWebVitals.js
└── setupTests.js
```