<script setup>
import { ref } from 'vue'
import { useVisibility } from '../composables/useVisibility'
import { useToast } from '../composables/useToast'

const { target, isVisible } = useVisibility()
const { show } = useToast()

const email = ref('')

function submit() {
  if (!email.value.trim()) {
    show('Veuillez entrer votre adresse email.')
    return
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
    show('Veuillez entrer une adresse email valide.')
    return
  }
  show('Merci ! Votre guide arrive dans votre boîte mail.')
  email.value = ''
}
</script>

<template>
  <section id="cta" ref="target" class="section-cta">
    <div class="cta-inner">
      <div class="cta-heading fade-up" :class="{ visible: isVisible }">
        <h2>Recevez<br />Le Plan<br />1200 elo.</h2>
      </div>

      <div class="cta-form-area fade-up delay-2" :class="{ visible: isVisible }">
        <p>
          Renseignez votre email et recevez immédiatement le guide pour
          progresser aux échecs en 30 jours : les ajustements concrets à
          appliquer dès aujourd'hui sur Chess.com.
        </p>

        <ul class="cta-benefits">
          <li>Les ajustements clés pour progresser en 30 jours</li>
          <li>Les 3 vrais leviers de progression à votre niveau</li>
          <li>20 minutes par jour, aucun prérequis</li>
        </ul>

        <input
          class="cta-email-input"
          type="email"
          placeholder="Votre addresse email"
          v-model="email"
          @keyup.enter="submit"
        />
        <button class="cta-submit-btn" @click="submit">
          Recevoir le guide gratuitement →
        </button>
        <p class="cta-form-note">Aucun spam. Désinscription à tout moment.</p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.section-cta {
  padding: 120px 48px;
  background: linear-gradient(180deg, #FAF4F4 0%, #ffffff 100%);
  min-height: 100vh;
  display: flex;
  align-items: center;
}

.cta-inner {
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 80px;
}

.cta-heading h2 {
  font-family: var(--font-display);
  font-size: clamp(3rem, 6vw, 5.5rem);
  font-weight: 900;
  line-height: 1;
  letter-spacing: -0.04em;
  color: var(--navy);
}

.cta-form-area {
  flex: 1;
  max-width: 500px;
}

.cta-form-area p {
  font-size: 1rem;
  line-height: 1.7;
  color: var(--text-body);
  margin-bottom: 28px;
}

.cta-benefits {
  list-style: none;
  margin-bottom: 32px;
}

.cta-benefits li {
  font-size: 1rem;
  color: var(--text-body);
  padding: 6px 0;
  padding-left: 16px;
  position: relative;
}

.cta-benefits li::before {
  content: '•';
  position: absolute;
  left: 0;
  color: var(--purple);
  font-weight: 700;
}

.cta-email-input {
  width: 100%;
  padding: 18px 20px;
  border: 1.5px solid rgba(30, 26, 46, 0.15);
  background: #fff;
  font-family: var(--font-body);
  font-size: 1rem;
  color: var(--text-dark);
  outline: none;
  margin-bottom: 12px;
  transition: border-color 0.2s;
}

.cta-email-input:focus { border-color: var(--purple); }

.cta-submit-btn {
  width: 100%;
  padding: 18px;
  background: var(--purple);
  color: #fff;
  border: none;
  font-family: var(--font-body);
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s, transform 0.2s;
}

.cta-submit-btn:hover {
  background: var(--purple-dark);
  transform: translateY(-1px);
}

.cta-form-note {
  font-size: 0.75rem;
  color: rgba(30, 26, 46, 0.4);
  margin-top: 10px;
  text-align: center;
}

@media (max-width: 1024px) {
  .cta-inner { flex-direction: column; text-align: center; gap: 48px; }
  .cta-form-area { max-width: 100%; }
  .cta-benefits li { text-align: left; }
}

@media (max-width: 768px) {
  .section-cta { padding: 80px 24px; }
}
</style>
