<script setup>
import { useVisibility } from '../composables/useVisibility'
const { target, isVisible } = useVisibility()

const quotes = [
  {
    text: '"La clé de la progression aux échecs, c\'est la qualité de l\'entraînement, pas la quantité de parties jouées."',
    author: 'Vladimir Kramnik',
    role: 'Grand Maître · Ancien Champion du Monde',
  },
  {
    text: 'Plus de 91% des joueurs sérieux connaissent une période de stagnation marquée. Ce n\'est pas un problème de talent, c\'est un problème de méthode.',
    author: 'Données Lichess',
    role: 'Analyse de millions de parties · Joueurs compétitifs',
  },
  {
    text: 'Le Grand Maître Axel Smith est passé de 2093 à 2458 elo en 2 ans grâce à une méthode d\'entraînement structurée, qu\'il a ensuite formalisée et enseignée.',
    author: 'Axel Smith',
    role: 'Grand Maître · Auteur de "Pump Up Your Rating"',
  },
]

const stats = [
  {
    number: '80%',
    title: 'des parties se décident sur la tactique',
    desc: 'en dessous de 2000 elo ; consensus des coachs professionnels',
  },
  {
    number: '4–8',
    title: 'semaines pour débloquer sa progression',
    desc: 'avec un entraînement ciblé et structuré ; données terrain, coachs FFE',
  },
  {
    number: '+200',
    title: 'points en une semaine est réaliste',
    desc: 'pour les niveaux entre 700 et 800 elo',
  },
]
</script>

<template>
  <section id="recherche" ref="target" class="section-recherche">
    <div class="recherche-inner">
      <h2 class="fade-up" :class="{ visible: isVisible }">Ce que la recherche dit...</h2>

      <div class="recherche-quotes fade-up delay-1" :class="{ visible: isVisible }">
        <div v-for="q in quotes" :key="q.author" class="recherche-quote">
          <blockquote>{{ q.text }}</blockquote>
          <p class="author">{{ q.author }}</p>
          <p class="role">{{ q.role }}</p>
        </div>
      </div>

      <div class="recherche-stats fade-up delay-2" :class="{ visible: isVisible }">
        <div v-for="s in stats" :key="s.number" class="recherche-stat">
          <div class="big-number">{{ s.number }}</div>
          <div class="stat-title">{{ s.title }}</div>
          <div class="stat-desc">{{ s.desc }}</div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.section-recherche {
  padding: 120px 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: linear-gradient(180deg, var(--lavender-bg), var(--purple));
  color: var(--text-light);
}

.recherche-inner {
  max-width: 1200px;
  margin: 0 auto;
}

.recherche-inner h2 {
  font-family: var(--font-display);
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 800;
  color: #fff;
  margin-bottom: 60px;
  letter-spacing: -0.02em;
}

.recherche-quotes {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
  margin-bottom: 80px;
}

.recherche-quote blockquote {
  font-family: var(--font-display);
  font-size: 0.95rem;
  font-style: italic;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.85);
  margin-bottom: 20px;
}

.author {
  font-family: var(--font-body);
  font-size: 0.9rem;
  font-weight: 600;
  color: #fff;
  margin-bottom: 3px;
}

.role {
  font-size: 0.8rem;
  color: rgba(255, 255, 255, 0.55);
  line-height: 1.4;
}

.recherche-stats {
  display: flex;
  justify-content: center;
  gap: 80px;
  flex-wrap: wrap;
}

.recherche-stat { text-align: left; }

.big-number {
  font-family: var(--font-display);
  font-size: 3rem;
  font-weight: 800;
  color: #fff;
  letter-spacing: -0.02em;
  margin-bottom: 4px;
}

.stat-title {
  font-size: 0.95rem;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 4px;
}

.stat-desc {
  font-size: 0.8rem;
  color: rgba(255, 255, 255, 0.5);
  max-width: 260px;
  line-height: 1.4;
}

@media (max-width: 1024px) {
  .recherche-quotes { grid-template-columns: 1fr; gap: 32px; }
}

@media (max-width: 768px) {
  .section-recherche { padding: 80px 24px; }
  .recherche-stats { gap: 40px; flex-direction: column; align-items: center; }
}
</style>
