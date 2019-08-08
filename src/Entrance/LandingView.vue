<template>
  <v-app>
    <v-content>
      <v-container
        :style="`background-color: ${$COLOR.primary};`"
        fluid
        fill-height
        class="relative"
      >
        <v-layout
          column
          class="-x-view -x-view-content"
          fill-height
        >
          <v-layout
            justify-center
            align-center
            column
            fill-height
          >
            <v-progress-circular
              :size="50"
              :width="2"
              color="secondary"
              indeterminate
            />
            <h2 class="mt-4 text-uppercase fw-100">
              Loading
            </h2>
          </v-layout>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: 'LandingView',
};

// @TODO implement
</script>
