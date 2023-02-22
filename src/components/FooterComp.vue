<template>
  <div class="sm:container mx-4 sm:mx-auto lg:py-14 py-12 flex flex-col sm:flex-row justify-between items-center">
    <div>
      <ul class="flex font-roboto font-medium">
        <li class="sm:mr-4 mr-2"><a href="#about">ABOUT</a></li>

        <li class="sm:mx-4 mx-2"><a href="#how-it-works">HOW IT WORKS</a></li>

        <li class="sm:ml-4 ml-2"><a href="#contact">CONTACT</a></li>
      </ul>
    </div>

    <div class="hidden md:block">
      <img
        src="../assets/logo.svg"
        alt="logo"
      />
    </div>

    <div class="flex items-center flex-col sm:flex-row mt-6">
      <div class="sm:mr-4 font-roboto font-bold mb-4">
        <button type="button">Sign Up</button>

        <button
          type="button"
          class="ml-2 mx-0 md:mx-6"
        >
          Login
        </button>
      </div>

      <div class="flex items-center sm:ml-4">
        <img
          src="../assets/fb.svg"
          alt="facebook"
        />

        <img
          src="../assets/ig.svg"
          alt="instagram"
          class="mx-4"
        />

        <img
          src="../assets/yt.svg"
          alt="youtube"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FooterComp',
}
</script>
