<template>
  <div class="sm:container mx-4 sm:mx-auto flex flex-col lg:py-14 py-12">
    <div class="text-center">
      <h2 class="font-bai font-bold text-6xl">1000+ Customers</h2>

      <p class="text-text text-roboto mt-8 mb-12">
        Analyze any Business or Creator account—including your competitors—to find the imagery, visuals, and captions that drive audience engagement. Get social calendars planned faster and spend less time testing content strategies.
      </p>
    </div>

    <div class="flex justify-center items-center flex-wrap">
      <div
        v-for="item in items"
        :key="item.title"
        class="p-10 lg:p-14 flex flex-col justify-center items-center border-text border"
      >
        <p class="text-text text-inter font-medium tracking-[.5rem]">{{ item.title }}</p>

        <h3 class="text-roboto font-medium text-2xl">{{ item.subtitle }}</h3>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TestimonialsComp',

  data() {
    return {
      items: [
        {
          title: 'PRODUCT',
          subtitle: '10,000+.',
        },
        {
          title: 'LIKES',
          subtitle: '456000',
        },
        {
          title: 'SALE',
          subtitle: '576864',
        },
        {
          title: 'CUSTOMERS',
          subtitle: '947444',
        },
      ],
    }
  },
}
</script>
