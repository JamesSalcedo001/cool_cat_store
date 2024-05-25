require 'stripe'

# for production use
Stripe.api_key = ENV["STRIPE_SECRET_KEY"]


# for development use
# Stripe.api_key = Rails.application.credentials.stripe[:secret_key]