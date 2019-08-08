<template>
  <v-app>
    <v-content>
      <v-container
        fluid
        fill-height
        class="relative"
      >
        <transition name="fade">
          <!-- <router-view/> -->
          <v-layout
            class="-x-view -x-view-content"
            align-center
            justify-center
            column
            fill-height
          >
            <img src="../assets/logo.png">
            <router-view />
          </v-layout>
        </transition>
      </v-container>
    </v-content>
  </v-app>
</template>

<style src="./Entrance.css"></style>

<script src="./Entrance.js"></script>
