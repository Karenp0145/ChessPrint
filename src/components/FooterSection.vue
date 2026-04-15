<script setup>
import { ref } from 'vue'
import { useToast } from '../composables/useToast'

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
  show('Merci ! Vous êtes inscrit à la newsletter.')
  email.value = ''
}

const legalLinks = [
  { label: 'Mentions légales', id: 'mentions-legales' },
  { label: 'Politique de confidentialité', id: 'politique-confidentialite' },
  { label: 'CGV', id: 'cgv' },
  { label: 'Gestion des cookies', id: 'cookies' },
]

function handleLegalClick(id) {
  show(`Page "${id}" — à configurer`)
}
</script>

<template>
  <footer class="footer">
    <div class="footer-inner">
      <div class="footer-left">
        <div class="footer-logo">Chess <span>Print</span></div>
        <p class="footer-desc">
          La méthode pour passer de 700 à 1200 elo en 30 jours. Sans coach. Sans heures d'étude.
        </p>

        <div class="footer-newsletter">
          <label class="newsletter-label">Newsletter</label>
          <div class="newsletter-form">
            <input
              type="email"
              placeholder="Votre addresse email"
              v-model="email"
              @keyup.enter="submit"
            />
            <button @click="submit">S'inscrire</button>
          </div>
          <p class="newsletter-note">C'est gratuit · Aucun spam</p>
        </div>
      </div>

      <div class="footer-right">
        <h4>Légal</h4>
        <nav class="legal-links">
          <a
            v-for="link in legalLinks"
            :key="link.id"
            href="#"
            @click.prevent="handleLegalClick(link.id)"
          >
            {{ link.label }}
          </a>
        </nav>
      </div>
    </div>

    <div class="footer-bottom">
      <p>© 2026 ChessPrint. Tous droits réservés</p>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background: var(--navy-light);
  color: rgba(255, 255, 255, 0.7);
}

.footer-inner {
  max-width: 1200px;
  margin: 0 auto;
  padding: 64px 48px 48px;
  display: flex;
  justify-content: space-between;
  gap: 80px;
}

.footer-left {
  max-width: 420px;
}

.footer-logo {
  font-family: var(--font-display);
  font-size: 1.3rem;
  font-weight: 800;
  color: #fff;
  margin-bottom: 12px;
}

.footer-logo span {
  color: var(--purple);
  font-weight: 500;
}

.footer-desc {
  font-size: 0.9rem;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.5);
  margin-bottom: 32px;
}

.newsletter-label {
  display: block;
  font-size: 0.75rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.4);
  text-transform: uppercase;
  letter-spacing: 0.06em;
  margin-bottom: 10px;
}

.newsletter-form {
  display: flex;
  gap: 0;
}

.newsletter-form input {
  flex: 1;
  padding: 12px 16px;
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.15);
  color: #fff;
  font-family: var(--font-body);
  font-size: 0.9rem;
  outline: none;
  transition: border-color 0.2s;
}

.newsletter-form input::placeholder {
  color: rgba(255, 255, 255, 0.3);
}

.newsletter-form input:focus {
  border-color: var(--purple);
}

.newsletter-form button {
  padding: 12px 20px;
  background: var(--purple);
  color: #fff;
  border: none;
  font-family: var(--font-body);
  font-size: 0.85rem;
  font-weight: 600;
  cursor: pointer;
  white-space: nowrap;
  transition: background 0.2s;
}

.newsletter-form button:hover {
  background: var(--purple-dark);
}

.newsletter-note {
  font-size: 0.7rem;
  color: rgba(255, 255, 255, 0.25);
  margin-top: 8px;
}

.footer-right h4 {
  font-family: var(--font-display);
  font-size: 1.1rem;
  font-weight: 700;
  color: #fff;
  margin-bottom: 20px;
}

.legal-links {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.legal-links a {
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.5);
  text-decoration: none;
  transition: color 0.2s;
}

.legal-links a:hover {
  color: var(--purple-light);
}

.footer-bottom {
  max-width: 1200px;
  margin: 0 auto;
  padding: 24px 48px;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
}

.footer-bottom p {
  font-size: 0.8rem;
  color: rgba(255, 255, 255, 0.3);
}

@media (max-width: 768px) {
  .footer-inner {
    flex-direction: column;
    gap: 48px;
    padding: 48px 24px 32px;
  }

  .footer-bottom {
    padding: 20px 24px;
  }

  .newsletter-form {
    flex-direction: column;
  }

  .newsletter-form button {
    width: 100%;
  }
}
</style>
