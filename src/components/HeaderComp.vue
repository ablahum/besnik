<template>
  <div class="sm:container mx-4 sm:mx-auto lg:py-14 py-12 flex items-center justify-between flex-col lg:flex-row">
    <div class="header__left self-start lg:self-auto">
      <h1 class="font-bai font-bold lg:text-7xl text-6xl">Banking <br /><span class="border-4 border-[#FF8A1F] rounded-[100%]">more</span> smart</h1>

      <p class="font-roboto lg:my-8 my-6 text-text">
        Meet the only spend management <br />
        platform and corporate card.
      </p>

      <div class="flex items-center">
        <button
          type="button"
          class="text-white bg-black border-none p-4 mr-4 shadow-lg shadow-shadow"
        >
          ->
        </button>

        <p class="font-roboto font-medium">Get your card</p>
      </div>
    </div>

    <div class="header__right">
      <img
        src="../assets/header.png"
        alt="header"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeaderComp',
}
</script>
