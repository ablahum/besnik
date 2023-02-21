<template>
  <div class="flex flex-col lg:flex-row items-center lg:items-start justify-center lg:my-14 my-12 lg:p-16 p-14 bg-highlight relative">
    <img
      src="../assets/rounded.svg"
      alt="rounded"
      class="absolute top-[-2rem]"
    />

    <div
      class="lg:mx-8 lg:my-0 mx-0 my-10"
      v-for="item in items"
      :key="item.title"
    >
      <h2 class="font-bai text-[2rem] font-medium">{{ item.title }}</h2>

      <p class="font-roboto text-text text-2xl mt-4">{{ item.subtitle }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HighlightsComp',

  data() {
    return {
      items: [
        {
          title: 'We Building Social uniqueness',
          subtitle: 'The marketing strategy lays out target markets and the value.',
        },
        {
          title: 'Social Media beyond probability',
          subtitle: 'Essentially a formula for how a business is going to compete.',
        },
      ],
    }
  },
}
</script>
