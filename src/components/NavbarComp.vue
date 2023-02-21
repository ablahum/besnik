<template>
  <div class="flex justify-between items-center py-2 sm:py-4 sm:container mx-4 sm:mx-auto">
    <div>
      <ul class="flex font-roboto text-xs sm:text-base font-medium">
        <li class="sm:mr-4 mr-2"><a href="#about">ABOUT</a></li>

        <li class="sm:mx-4 mx-2"><a href="#how-it-works">HOW IT WORKS</a></li>

        <li class="sm:ml-4 ml-2"><a href="#contact">CONTACT</a></li>
      </ul>
    </div>

    <div class="hidden sm:block">
      <img
        src="../assets/logo.svg"
        alt="logo"
      />
    </div>

    <div class="border border-[#DFDFDF] p-4 rounded-full sm:ml-0 ml-2">
      <img
        src="../assets/cart.svg"
        alt="cart"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'NavbarComp',
}
</script>
