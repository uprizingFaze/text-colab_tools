# Editor de texto

### Repo de la Hackathon Del Dev

<img src="https://www.colabtools.online/text.png"  alt="Herramienta de colaboracion en linea)" />




#### Documentacion del proyecyto
- [Docs](https://docs.colabtools.online/)


### Estructura del proyecto

```
└── 📁text-colab_tools
    └── .gitignore
    └── .prettierrc
    └── README.md
    └── next-env.d.ts
    └── next.config.js
    └── package-lock.json
    └── package.json
    └── 📁public
        └── icon.svg
    └── 📁src
        └── 📁app
            └── Room.tsx
            └── 📁api
                └── 📁liveblocks-auth
                    └── route.ts
            └── layout.tsx
            └── page.tsx
        └── 📁components
            └── Avatars.module.css
            └── Avatars.tsx
            └── CollaborativeEditor.module.css
            └── CollaborativeEditor.tsx
            └── Loading.module.css
            └── Loading.tsx
        └── 📁icons
            └── Moon.tsx
            └── Sun.tsx
            └── index.ts
        └── liveblocks.config.ts
        └── 📁primitives
            └── 📁Button
                └── Button.module.css
                └── Button.tsx
                └── index.ts
        └── 📁styles
            └── globals.css
            └── normalize.css
            └── text-editor.css
    └── tsconfig.json
```

#### Comenzar:

#####  Clonar el repositorio:

```bash
git clone https://github.com/uprizingFaze/text-colab_tools.git
cd Colab_Tools
```

#####  Instalación de dependencias:


```bash
npm install
```

##### Ejectute el servidor de desarrollo:


```bash
npm run dev
# o
yarn dev
# o
pnpm dev
# o
bun dev
```
