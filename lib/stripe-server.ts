import Stripe from 'stripe';

// Inicialización de Stripe en el lado del servidor
export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2025-12-15.clover', // Usar la versión más reciente disponible
  appInfo: {
    name: 'Nightly Software',
    version: '0.1.0',
  },
}); 