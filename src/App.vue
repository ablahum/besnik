<template>
  <NavbarComp />

  <HeaderComp />

  <DealsComp />

  <HighlightsComp />

  <TestimonialsComp />

  <FeatureComp />

  <NewsletterComp />

  <FooterComp />
</template>

<script>
import { NavbarComp, HeaderComp, DealsComp, HighlightsComp, TestimonialsComp, FeatureComp, NewsletterComp, FooterComp } from './components'

export default {
  name: 'App',
  components: {
    NavbarComp,
    HeaderComp,
    DealsComp,
    HighlightsComp,
    TestimonialsComp,
    FeatureComp,
    NewsletterComp,
    FooterComp,
  },
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Bai+Jamjuree:wght@500;600;700&family=Inter:wght@500;700&family=Roboto:wght@400;500;700&display=swap');

@tailwind base;
@tailwind components;
@tailwind utilities;
</style>
