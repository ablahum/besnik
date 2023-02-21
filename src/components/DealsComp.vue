<template>
  <div class="sm:container mx-4 sm:mx-auto lg:py-14 py-12 flex items-start lg:items-center justify-between flex-col lg:flex-row">
    <div class="lg:mr-14 lg:mb-0 md:mb-8 mb-4 self-start sm:self-center">
      <h3 class="font-bai font-bold text-[2rem] mb-4">
        Hot 🔥 <br />
        deals for you
      </h3>

      <p class="font-roboto text-text">Online shopping for retail sales direct to consumers</p>
    </div>

    <div class="flex flex-col md:flex-row lg:mt-0 md:mt-8 mt-4">
      <div
        class="lg:mx-14 md:mx-8 md:my-0 my-4 first:ml-0 last:mr-0"
        v-for="deal in deals"
        :key="deal.title"
      >
        <img
          src="../assets/deals-icon.svg"
          alt="deals icon"
        />

        <h3 class="font-inter text-2xl font-bold mt-8 mb-4">{{ deal.title }}</h3>

        <p class="font-roboto text-text">{{ deal.subtitle }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DealsComp',

  data() {
    return {
      deals: [
        {
          title: '1.5% cashback',
          subtitle: 'Online shopping for retail sales direct to consumers',
        },
        {
          title: '30-day terms',
          subtitle: 'Online shopping for retail sales direct to consumers',
        },
        {
          title: 'Save Money',
          subtitle: 'Online shopping for retail sales direct to consumers',
        },
      ],
    }
  },
}
</script>
