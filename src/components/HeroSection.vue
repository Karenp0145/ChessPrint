<script setup>
import { ref } from 'vue'
import { useVisibility } from '../composables/useVisibility'
import { useToast } from '../composables/useToast'

const { target, isVisible } = useVisibility()
const { show } = useToast()

const email = ref('')
const isSubmitting = ref(false)
const WEBHOOK_URL = 'https://hook.eu1.make.com/0hj8f8em4i9qd7scyqktw5jwc0hljyat'

async function submit() {
  if (!email.value.trim()) {
    show('Veuillez entrer votre adresse email.')
    return
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
    show('Veuillez entrer une adresse email valide.')
    return
  }

  if (isSubmitting.value) return
  isSubmitting.value = true

  try {
    const response = await fetch(WEBHOOK_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email.value.trim(),
        source: 'hero',
      }),
    })

    if (!response.ok) {
      throw new Error('Webhook request failed')
    }

    show('Merci ! Votre guide arrive dans votre boîte mail.')
    email.value = ''
  } catch {
    show('Une erreur est survenue. Réessayez dans quelques secondes.')
  } finally {
    isSubmitting.value = false
  }
}
</script>

<template>
  <section id="hero" ref="target" class="hero">
    <!-- Checkerboard décoratif -->
    <img src="/checkerboard.svg" alt="" class="hero-checkerboard" />

    <div class="hero-content">
      <h1 class="fade-up" :class="{ visible: isVisible }">
        Guide échecs gratuit :<br />
        Comment progresser de
      </h1>

      <div class="hero-elo-line fade-up delay-1" :class="{ visible: isVisible }">
        <span class="elo-from">700</span>
        <span class="elo-arrow">→</span>
        <span class="elo-to">1200</span>
        <span class="elo-label">Elo sur Chess.com</span>
      </div>

      <div class="hero-bottom">
        <div class="hero-subtitle fade-up delay-2" :class="{ visible: isVisible }">
          <p>Le guide gratuit pour <span class="highlight">progresser aux échecs</span> sans coach,</p>
          <p>sans des heures d'étude.</p>
          <p class="bold-line">Un système. 20 minutes. 30 jours.</p>
        </div>

        <div class="fade-up delay-3" :class="{ visible: isVisible }">
          <div class="hero-form">
            <input
              type="email"
              placeholder="Votre addresse email"
              v-model="email"
              @keyup.enter="submit"
            />
            <button @click="submit" :disabled="isSubmitting">
              {{ isSubmitting ? 'Envoi...' : 'Recevoir le guide →' }}
            </button>
          </div>
          <p class="hero-form-note">Aucun spam. Désinscription à tout moment.</p>
        </div>
      </div>

      <div class="hero-stats fade-up delay-4" :class="{ visible: isVisible }">
        <div class="hero-stat" v-for="stat in [
          { number: '20', label: 'MIN / JOUR' },
          { number: '30', label: 'JOURS' },
          { number: '+200', label: 'ELO VISÉS' },
          { number: '0€', label: 'COACH REQUIS' },
        ]" :key="stat.label">
          <span class="number">{{ stat.number }}</span>
          <span class="label">{{ stat.label }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  padding: 140px 48px 80px;
  background: linear-gradient(90deg, #EECBDB 60%, #faf4f4 100%);
  position: relative;
  overflow: hidden;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.hero-checkerboard {
  position: absolute;
  right: -100px;
  bottom: 0px;
  width: 60%;
  height: 60%;
  opacity: 0.6;
  pointer-events: none;
}

.hero-content {
  position: relative;
  z-index: 2;
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
}

.hero h1 {
  font-family: var(--font-display);
  font-size: clamp(2.8rem, 6vw, 5rem);
  font-weight: 800;
  line-height: 1.05;
  letter-spacing: -0.03em;
  color: var(--navy);
  margin-bottom: 12px;
}

.hero-elo-line {
  display: flex;
  align-items: center;
  gap: 24px;
  margin-bottom: 48px;
  flex-wrap: wrap;
}

.elo-from {
  font-family: var(--font-display);
  font-size: clamp(5rem, 12vw, 10rem);
  font-weight: 900;
  font-style: italic;
  color: transparent;
  -webkit-text-stroke: 2px var(--purple-light);
  line-height: 1;
  letter-spacing: -0.04em;
}

.elo-arrow {
  font-size: clamp(2.5rem, 5vw, 4rem);
  color: var(--navy);
  font-weight: 300;
}

.elo-to {
  font-family: var(--font-display);
  font-size: clamp(5rem, 12vw, 10rem);
  font-weight: 900;
  color: var(--navy);
  line-height: 1;
  letter-spacing: -0.04em;
}

.elo-label {
  font-family: var(--font-display);
  font-size: 0.95rem;
  font-style: italic;
  color: var(--text-body);
  align-self: flex-end;
  margin-bottom: 16px;
}

.hero-bottom {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  gap: 48px;
  flex-wrap: wrap;
}

.hero-subtitle p {
  font-size: 1rem;
  line-height: 1.6;
  color: var(--text-body);
  margin-bottom: 4px;
}

.hero-subtitle .highlight { font-weight: 600; color: var(--purple-dark); }

.hero-subtitle .bold-line {
  font-family: var(--font-display);
  font-weight: 700;
  font-style: italic;
  color: var(--navy);
  margin-top: 8px;
}

.hero-form {
  display: flex;
  gap: 0;
  max-width: 480px;
  width: 100%;
}

.hero-form input {
  flex: 1;
  padding: 16px 20px;
  border: 1.5px solid rgba(30, 26, 46, 0.15);
  background: rgba(255, 255, 255, 0.6);
  font-family: var(--font-body);
  font-size: 0.95rem;
  color: var(--text-dark);
  outline: none;
  transition: border-color 0.2s;
}

.hero-form input::placeholder { color: rgba(30, 26, 46, 0.4); }
.hero-form input:focus { border-color: var(--purple); }

.hero-form button {
  padding: 16px 28px;
  background: var(--button-bg);
  color: #fff;
  border: none;
  font-family: var(--font-body);
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  white-space: nowrap;
  transition: background 0.2s, transform 0.2s;
}

.hero-form button:hover {
  background: var(--navy);
  transform: translateY(-1px);
}

.hero-form-note {
  font-size: 0.75rem;
  color: rgba(30, 26, 46, 0.45);
  margin-top: 8px;
}

.hero-stats {
  display: flex;
  gap: 0;
  margin-top: 64px;
  border-top: 1px solid rgba(30, 26, 46, 0.1);
  padding-top: 32px;
}

.hero-stat {
  display: flex;
  align-items: baseline;
  gap: 10px;
  padding-right: 48px;
  border-right: 1px solid rgba(30, 26, 46, 0.1);
}

.hero-stat:last-child { border-right: none; padding-right: 0; }
.hero-stat:not(:first-child) { padding-left: 48px; }

.hero-stat .number {
  font-family: var(--font-display);
  font-size: 1.8rem;
  font-weight: 800;
  color: var(--navy);
  letter-spacing: -0.02em;
}

.hero-stat .label {
  font-size: 0.8rem;
  font-weight: 500;
  color: var(--text-body);
  text-transform: uppercase;
  letter-spacing: 0.08em;
}

@media (max-width: 768px) {
  .hero { padding: 120px 24px 60px; }
  .hero-bottom { flex-direction: column; gap: 32px; }
  .hero-form { flex-direction: column; }
  .hero-form button { width: 100%; }
  .hero-stats { flex-wrap: wrap; gap: 24px; }
  .hero-stat { border-right: none; padding-right: 0; padding-left: 0 !important; }
}
</style>
