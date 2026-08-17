import type { Service } from '../types'

export const services: Service[] = [
  {
    slug: 'sites-web',
    title: 'Création de sites web',
    shortDescription: 'Sites vitrines, institutionnels et boutiques en ligne, livrés rapides et prêts à convertir vos visiteurs en clients.',
    description:
      'Nous créons des sites web sur mesure adaptés à votre activité : site vitrine pour présenter votre entreprise, site institutionnel pour une organisation, ou boutique en ligne pour vendre vos produits. Chaque site est optimisé pour les mobiles, rapide à charger et référencé pour être visible sur Google.',
    prestations: [
      'Site vitrine pour présenter votre activité et vos services',
      'Site institutionnel pour une entreprise, une ONG ou une administration',
      'Boutique en ligne avec paiement Mobile Money ou carte bancaire',
      'Blog ou portfolio pour mettre en valeur votre travail',
      'Référencement naturel (SEO) pour être visible sur Google',
    ],
    icon: 'globe',
  },
  {
    slug: 'logiciels-de-gestion',
    title: 'Logiciels de gestion',
    shortDescription: 'Des logiciels sur mesure pour remplacer vos tableurs et fichiers papier par un outil fiable et centralisé.',
    description:
      "Nous développons des logiciels adaptés à votre activité pour gérer vos stocks, vos ventes, vos commandes ou vos projets depuis un seul outil, accessible à toute votre équipe, avec un suivi en temps réel.",
    prestations: [
      'Gestion de stock : entrées, sorties, alertes de rupture',
      'CRM : suivi de vos clients et de vos opportunités commerciales',
      'Gestion des commandes et des ventes, avec reçus et factures',
      'Gestion des fournisseurs et des achats',
      "Gestion de projets : tâches, échéances, suivi d'équipe",
      'Tableaux de bord pour suivre vos chiffres en un coup d\'œil',
    ],
    icon: 'layout-dashboard',
  },
  {
    slug: 'applications-mobiles',
    title: 'Applications mobiles',
    shortDescription: 'Des applications Android et iOS pour rester connecté à vos clients où qu\'ils soient.',
    description:
      "Nous développons des applications mobiles natives ou multiplateformes, avec des interfaces simples et rapides, adaptées aussi bien aux smartphones d'entrée de gamme qu'aux modèles récents.",
    prestations: [
      'Applications Android pour toucher le plus grand nombre',
      'Applications iOS pour les utilisateurs iPhone',
      'Applications hybrides (une seule application pour Android et iOS)',
      'Notifications push et fonctionnement hors connexion',
    ],
    icon: 'smartphone',
  },
  {
    slug: 'autres-services',
    title: 'Hébergement & performance',
    shortDescription: 'Hébergement, sécurité et performance pour que vos outils digitaux restent fiables dans la durée.',
    description:
      "Au-delà du développement, nous assurons l'hébergement, la sécurité et l'optimisation de vos sites et logiciels, pour qu'ils restent rapides, disponibles et protégés dans le temps.",
    prestations: [
      'Hébergement cloud et mise en ligne de vos sites et logiciels',
      'Sauvegarde régulière de vos données',
      'Optimisation de la vitesse et des performances',
      'Mises à jour et corrections après la mise en ligne',
    ],
    icon: 'cloud',
  },

  {
    slug: 'maintenance-informatique',
    title: 'Maintenance & support informatique',
    shortDescription: 'Un accompagnement technique en partenariat pour entretenir votre parc informatique et vos outils digitaux.',
    description:
      "En partenariat avec votre entreprise, nous assurons le suivi technique de votre parc informatique et de vos outils digitaux : maintenance de vos ordinateurs, mises à jour de sécurité, et suivi continu des sites web et logiciels que nous développons pour vous. Un accompagnement flexible, sans présence à temps plein, pour garder vos outils fonctionnels et à jour dans la durée.",
    prestations: [
      'Maintenance matérielle des ordinateurs et équipements',
      "Mises à jour des systèmes d'exploitation et des antivirus",
      'Suivi et correction des sites web et logiciels développés par nos soins',
      'Assistance technique en cas de panne ou de dysfonctionnement',
    ],
    icon: 'wrench',
  },
]