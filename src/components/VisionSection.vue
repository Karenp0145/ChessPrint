<script setup>
import { useVisibility } from '../composables/useVisibility'
const { target, isVisible } = useVisibility()

const items = [
  {
    number: '01',
    title: 'Méthode > Talent',
    text: 'Les échecs ne sont pas une question de don naturel. Avec le bon système, tout le monde peut atteindre 1200 elo, peu importe son point de départ.',
  },
  {
    number: '02',
    title: 'Qualité > Quantité',
    text: "20 minutes d'entraînement ciblé produisent plus de résultats que 2h de travail aléatoire. L'efficacité prime sur l'accumulation.",
  },
  {
    number: '03',
    title: 'Le plaisir de progresser est sous-estimé',
    text: "Voir son niveau monter concrètement, comprendre pourquoi on perdait avant, gagner des parties qu'on aurait perdues il y a un mois. C'est ça qui donne envie de continuer.",
  },
]
</script>

<template>
  <section id="vision" ref="target" class="section-vision">
    <!-- Pièces décoratives -->
    <img src="/chess-pieces.svg" alt="" class="chess-deco top-left" />
    <img src="/chess-pieces.svg" alt="" class="chess-deco top-right" />
    <img src="/chess-pieces.svg" alt="" class="chess-deco bottom-left" />

    <div class="vision-inner">
      <h2 class="fade-up" :class="{ visible: isVisible }">Notre vision</h2>

      <div
        v-for="(item, i) in items"
        :key="item.number"
        class="vision-item fade-up"
        :class="[`delay-${i + 1}`, { visible: isVisible }]"
      >
        <span class="vision-number">{{ item.number }}</span>
        <div class="vision-item-content">
          <h4>{{ item.title }}</h4>
          <p>{{ item.text }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.section-vision {
  padding: 120px 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: linear-gradient(180deg, #EECBDB 0%, #ffffff 100%);
  position: relative;
  overflow: hidden;
}

.chess-deco {
  position: absolute;
  pointer-events: none;
  opacity: 0.10;
}

.chess-deco.top-left { top: 20px; left: -40px; width: 220px; }
.chess-deco.top-right { top: 0; right: -30px; width: 260px; transform: scaleX(-1); }
.chess-deco.bottom-left { bottom: 20px; left: -40px; width: 190px; transform: scaleY(-1); }

.vision-inner {
  max-width: 900px;
  margin: 0 auto;
  position: relative;
  z-index: 2;
}

.vision-inner h2 {
  font-family: var(--font-display);
  font-size: clamp(2.2rem, 4vw, 3.5rem);
  font-weight: 800;
  text-align: center;
  color: var(--navy);
  margin-bottom: 72px;
  letter-spacing: -0.02em;
}

.vision-item {
  display: flex;
  align-items: flex-start;
  gap: 36px;
  margin-bottom: 56px;
}

.vision-number {
  font-family: var(--font-display);
  font-size: 3.5rem;
  font-weight: 600;
  font-style: italic;
  color: var(--purple);
  line-height: 1;
  min-width: 80px;
  text-align: right;
}

.vision-item-content h4 {
  font-family: var(--font-display);
  font-size: 1.4rem;
  font-weight: 800;
  color: var(--navy);
  margin-bottom: 10px;
}

.vision-item-content p {
  font-size: 1rem;
  line-height: 1.7;
  color: var(--text-body);
  max-width: 540px;
}

@media (max-width: 768px) {
  .section-vision { padding: 80px 24px; }
}
</style>
