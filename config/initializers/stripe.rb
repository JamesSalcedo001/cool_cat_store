require 'stripe'

# Stripe.api_key = ENV["STRIPE_SECRET_KEY"]
Stripe.api_key = Rails.application.credentials.stripe[:secret_key]