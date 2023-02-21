<template>
  <NavbarComp />

  <HeaderComp />

  <DealsComp />

  <HighlightsComp />

  <TestimonialsComp />
</template>

<script>
import { NavbarComp, HeaderComp, DealsComp, HighlightsComp, TestimonialsComp } from './components'

export default {
  name: 'App',
  components: {
    NavbarComp,
    HeaderComp,
    DealsComp,
    HighlightsComp,
    TestimonialsComp,
  },
}
</script>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */

@import url('https://fonts.googleapis.com/css2?family=Bai+Jamjuree:wght@500;600;700&family=Inter:wght@500;700&family=Roboto:wght@400;500;700&display=swap');

@tailwind base;
@tailwind components;
@tailwind utilities;
</style>
