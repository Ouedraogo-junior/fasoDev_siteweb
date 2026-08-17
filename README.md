# FasoDev

Site web vitrine de FasoDev — services de développement web, logiciels de gestion et applications mobiles au Burkina Faso.

🔗 [fasodev.com](https://fasodev.com) <!-- à adapter si le domaine diffère -->

## ✨ Fonctionnalités

- Présentation des services : sites web, logiciels de gestion, applications mobiles, maintenance & support informatique
- Portfolio de réalisations avec fiches détaillées par projet (stack technique, lien de démo)
- Fil d'Ariane visuel et données structurées (JSON-LD) pour le référencement
- Formulaire de contact avec présélection du service concerné
- SEO par page (titres, descriptions, métadonnées)
- Interface responsive, du mobile au desktop

## 🛠️ Stack technique

- [React](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/) — build tool
- [React Router](https://reactrouter.com/) — routing
- [Tailwind CSS](https://tailwindcss.com/) — styles
- [Lucide React](https://lucide.dev/) — icônes

## 🚀 Installation

```bash
git clone https://github.com/<votre-compte>/<votre-repo>.git
cd <votre-repo>
npm install
```

## 📜 Scripts disponibles

```bash
npm run dev        # Lance le serveur de développement
npm run build       # Build de production
npm run preview     # Prévisualise le build de production
```

## 📁 Structure du projet

```
src/
├── components/
│   ├── layout/        # Header, Footer, Container, PageHeader, Breadcrumb...
│   └── sections/       # Hero, ServicesOverview, ContactCTA, ServiceCard...
├── data/
│   ├── services.ts     # Contenu des services proposés
│   └── projects.ts     # Contenu du portfolio de réalisations
├── pages/               # Accueil, Services, ServiceDetail, Réalisations, ProjectDetail, Contact, À propos
├── types.ts             # Types partagés (Service, Project)
└── main.tsx
```

## ✏️ Modifier le contenu

- **Services** : éditer `src/data/services.ts`
- **Réalisations** : éditer `src/data/projects.ts`
- **Images de projets** : à placer dans `public/images/projects/`, puis renseigner le champ `image` de l'entrée correspondante

## 📄 Licence

Tous droits réservés — FasoDev.
