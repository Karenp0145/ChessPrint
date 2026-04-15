<script setup>
import { useVisibility } from '../composables/useVisibility'
const { target, isVisible } = useVisibility()
</script>

<template>
  <section id="pourquoi" ref="target" class="section-pourquoi">
    <div class="pourquoi-inner">
      <div class="pourquoi-image fade-up" :class="{ visible: isVisible }">
        <img src="/chess_1.png" alt="Échiquier avec pièces" />
      </div>

      <div class="pourquoi-text">
        <h2 class="fade-up" :class="{ visible: isVisible }">Pourquoi votre niveau</h2>
        <p class="subtitle-italic fade-up delay-1" :class="{ visible: isVisible }">
          ne progresse pas aux échecs
        </p>

        <p class="fade-up delay-2" :class="{ visible: isVisible }">
          La plupart des joueurs entre 600 et 1000 elo s'entraînent régulièrement.
          Vidéos, puzzles, parties en ligne. Et pourtant, le classement ne bouge pas.
        </p>
        <p class="fade-up delay-2" :class="{ visible: isVisible }">
          Ce n'est généralement pas un manque d'efforts. C'est que le contenu
          disponible n'est pas pensé pour ce niveau précis. Il s'adresse aux
          débutants complets ou aux joueurs déjà avancés. Entre les deux, il n'y a
          pas grand chose.
        </p>

        <h3 class="fade-up delay-3" :class="{ visible: isVisible }">Ce qu'on observe</h3>
        <ul class="pourquoi-observations fade-up delay-3" :class="{ visible: isVisible }">
          <li>Un vide dans le contenu existant</li>
          <li>Progresser prend moins de temps qu'on ne le pense</li>
          <li>Le plaisir de jouer se perd en cours de route</li>
        </ul>
      </div>
    </div>
  </section>
</template>

<style scoped>
.section-pourquoi {
  padding: 120px 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: linear-gradient(180deg, #FAF4F4 0%, #ffffff 100%);
}

.pourquoi-inner {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  gap: 80px;
  align-items: flex-start;
}

.pourquoi-image {
  flex: 0 0 440px;
  height: 480px;
  border-radius: 4px;
  overflow: hidden;
}

.pourquoi-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.pourquoi-text {
  flex: 1;
  padding-top: 24px;
}

.pourquoi-text h2 {
  font-family: var(--font-display);
  font-size: clamp(2rem, 4vw, 3.2rem);
  font-weight: 800;
  line-height: 1.1;
  letter-spacing: -0.02em;
  color: var(--navy);
  margin-bottom: 6px;
}

.subtitle-italic {
  font-family: var(--font-display);
  font-size: clamp(1.5rem, 3vw, 2.4rem);
  font-style: italic;
  font-weight: 300;
  color: var(--purple);
  margin-bottom: 36px;
  line-height: 1.2;
}

.pourquoi-text p {
  font-size: 1rem;
  line-height: 1.7;
  color: var(--text-body);
  margin-bottom: 16px;
  max-width: 520px;
}

.pourquoi-text h3 {
  font-family: var(--font-display);
  font-size: 1.3rem;
  font-weight: 700;
  color: var(--navy);
  margin-top: 36px;
  margin-bottom: 16px;
}

.pourquoi-observations {
  list-style: none;
}

.pourquoi-observations li {
  font-size: 1rem;
  line-height: 1.7;
  color: var(--text-body);
  padding: 6px 0;
}

@media (max-width: 1024px) {
  .pourquoi-inner { flex-direction: column; gap: 48px; }
  .pourquoi-image { flex: 0 0 auto; width: 100%; height: 360px; }
}

@media (max-width: 768px) {
  .section-pourquoi { padding: 80px 24px; }
}
</style>
