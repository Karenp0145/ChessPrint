# Chess Print — Guide de setup & déploiement

## 1. Prérequis

Installe Node.js (v18+) si ce n'est pas déjà fait :
- macOS : `brew install node`
- Windows : https://nodejs.org (télécharge le LTS)
- Vérifie : `node -v` et `npm -v`

---

## 2. Setup du projet en local

```bash
# Clone ou copie le dossier chess-print quelque part sur ton ordi
cd chess-print

# Installe les dépendances
npm install

# Lance le serveur de dev
npm run dev
```

Tu verras un message du type :
```
VITE v5.x.x  ready in 300ms
➜  Local:   http://localhost:5173/
```

Ouvre http://localhost:5173 dans ton navigateur — ta landing page est live.

---

## 3. Structure du projet

```
chess-print/
├── index.html                  ← Point d'entrée HTML
├── package.json
├── vite.config.js
├── .gitignore
├── public/                     ← Fichiers statiques (favicon, images…)
└── src/
    ├── main.js                 ← Monte l'app Vue
    ├── App.vue                 ← Shell principal
    ├── assets/
    │   └── main.css            ← Variables CSS globales + reset
    ├── composables/
    │   ├── useVisibility.js    ← IntersectionObserver réutilisable
    │   └── useToast.js         ← Notifications toast partagées
    └── components/
        ├── NavBar.vue          ← Navigation fixe
        ├── HeroSection.vue     ← Hero 700 → 1200
        ├── PourquoiSection.vue ← Section problème
        ├── VisionSection.vue   ← 01/02/03
        ├── RechercheSection.vue← Citations + stats
        ├── CtaSection.vue      ← Formulaire final
        ├── FooterSection.vue   ← Pied de page
        └── ToastNotification.vue← Feedback utilisateur
```

---

## 4. Déploiement sur Vercel (gratuit)

### Option A — Via GitHub (recommandé)

**Étape 1 : Pousse le code sur GitHub**

```bash
cd chess-print
git init
git add .
git commit -m "Initial commit - Chess Print landing page"
```

Crée un repo sur https://github.com/new (privé ou public), puis :

```bash
git remote add origin https://github.com/TON-USER/chess-print.git
git branch -M main
git push -u origin main
```

**Étape 2 : Connecte à Vercel**

1. Va sur https://vercel.com et connecte-toi avec GitHub
2. Clique "Add New Project"
3. Sélectionne ton repo `chess-print`
4. Vercel détecte automatiquement Vite — laisse les paramètres par défaut :
   - Framework Preset : `Vite`
   - Build Command : `npm run build`
   - Output Directory : `dist`
5. Clique "Deploy"

En ~30 secondes, ton site est live sur `chess-print-xxx.vercel.app`.

**Étape 3 : Domaine personnalisé (optionnel)**

1. Dans le dashboard Vercel de ton projet → Settings → Domains
2. Ajoute ton domaine (ex: `chessprint.fr`)
3. Vercel te donne les DNS à configurer chez ton registrar :
   - Type `A` → `76.76.21.21`
   - Ou type `CNAME` → `cname.vercel-dns.com`
4. SSL est automatique

### Option B — Vercel CLI (sans GitHub)

```bash
# Installe Vercel CLI
npm i -g vercel

# Depuis le dossier du projet
cd chess-print
vercel

# Suis les instructions :
# → Set up and deploy? Yes
# → Which scope? (ton compte)
# → Link to existing project? No
# → Project name? chess-print
# → Directory? ./
# → Override settings? No
```

Ton site est déployé. Pour les mises à jour futures :

```bash
vercel --prod
```

---

## 5. Alternative : Netlify

```bash
# Build le projet
npm run build

# Installe Netlify CLI
npm i -g netlify-cli

# Déploie
netlify deploy --prod --dir=dist
```

Ou drag & drop le dossier `dist/` sur https://app.netlify.com/drop.

---

## 6. Ajouter un domaine personnalisé

| Registrar | Guide |
|-----------|-------|
| OVH       | Domaines → Zone DNS → Ajoute un CNAME vers `cname.vercel-dns.com` |
| Namecheap | Domain List → Manage → Advanced DNS → Add CNAME |
| Google Domains | DNS → Custom records → CNAME |

---

## 7. Prochaines étapes

### Connecter la collecte d'emails

Quand tu seras prêt, il suffira de modifier la fonction `submit()` dans
`HeroSection.vue` et `CtaSection.vue`. Par exemple avec ConvertKit :

```js
async function submit() {
  // ... validation existante ...

  const res = await fetch('https://api.convertkit.com/v3/forms/FORM_ID/subscribe', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      api_key: 'TA_CLE_API',
      email: email.value,
    }),
  })

  if (res.ok) {
    show('Merci ! Votre guide arrive dans votre boîte mail. 🎉')
    email.value = ''
  } else {
    show('Une erreur est survenue. Réessayez.')
  }
}
```

### Ajouter un favicon

Place ton fichier `favicon.ico` ou `favicon.svg` dans le dossier `public/`.

### Analytics

Ajoute Plausible (privacy-friendly) ou Google Analytics dans `index.html` :

```html
<script defer data-domain="chessprint.fr" src="https://plausible.io/js/script.js"></script>
```

---

## Commandes utiles

| Commande          | Description                    |
|-------------------|--------------------------------|
| `npm run dev`     | Lance le serveur local         |
| `npm run build`   | Build de production → `dist/`  |
| `npm run preview` | Prévisualise le build          |
