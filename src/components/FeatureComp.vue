<template>
  <div class="sm:container mx-4 sm:mx-auto lg:py-14 py-12 flex lg:flex-row flex-col items-center justify-center">
    <div>
      <img
        src="../assets/feature.png"
        alt="feature"
      />
    </div>

    <div class="lg:ml-12 mt-12">
      <h2 class="font-bai font-bold text-5xl">Handoff your work smarter now</h2>

      <p class="text-text font-roboto mt-6">Create documentation for the collaborators (i.e. designers or devs) directly in your design file.</p>

      <div class="mt-8">
        <div
          v-for="(item, i) in items"
          :key="i"
          class="p-4 flex items-center"
        >
          <div class="w-1/4">
            <img
              :src="item.icon"
              alt="feature icon"
              class="w-full h-full"
            />
          </div>

          <div class="ml-4 w-9/12">
            <h3 class="font-bai font-bold">{{ item.title }}</h3>

            <p class="mt-4 font-roboto text-text">{{ item.subtitle }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import strategic from '../assets/strategic.svg'
import schedule from '../assets/schedule.svg'

export default {
  name: 'FeatureComp',

  data() {
    return {
      items: [
        {
          icon: strategic,
          title: 'Strategic',
          subtitle: 'Suggests that the component spacing between cards and elements',
        },
        {
          icon: schedule,
          title: 'Work Schedule',
          subtitle: 'Work schedule is the time an employee is expected to be on the job',
        },
      ],
    }
  },
}
</script>

<style></style>
