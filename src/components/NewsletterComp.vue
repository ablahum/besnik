<template>
  <div class="flex flex-col lg:flex-row items-center justify-center lg:my-14 my-12 lg:p-16 p-14 bg-highlight">
    <div class="flex flex-col items-start sm:items-center lg:items-start self-start sm:self-auto">
      <div class="flex">
        <p class="font-roboto text-text font-bold text-2xl">Subscribe <br />to get updated news</p>

        <div class="w-[8px] h-[100px] bg-text ml-8 hidden lg:block" />
      </div>

      <img
        src="../assets/play.png"
        alt=""
        class="mt-8"
      />

      <div class="w-[100px] h-[4px] bg-text mt-8 block lg:hidden" />
    </div>

    <div class="flex flex-col items-start sm:items-center lg:items-start mx-0 my-14 lg:mx-14 lg:my-0">
      <h2 class="font-bai font-bold text-5xl">Subscribe <br />Our Newsletter</h2>

      <button
        type="button"
        class="bg-button text-white py-4 px-8 mt-8 lg:mt-12"
      >
        Subscribe
      </button>
    </div>

    <div>
      <img
        src="../assets/visa.png"
        alt="visa"
        class="w-full h-full"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'NewsletterComp',
}
</script>
