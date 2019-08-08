<template>
  <v-layout
    column
    class="-x-view -x-view-content"
    fill-height
  >
    <v-layout
      v-if="$store.state.Activity.processing"
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
      <h2 class="mt-4 text-primary text-uppercase fw-100">
        Loading
      </h2>
    </v-layout>

    <v-layout
      v-if="!$store.state.Activity.processing && this.$data.posts && !this.$data.posts.length"
      justify-center
      align-center
      column
      fill-height
    >
      <h2 class="mt-4 text-primary fw-100">
        No data was provided.
      </h2>

      <v-btn
        outline
        i-flat
        color="primary"
        class="mt-2"
        @click="fetchPosts()"
      >
        <span class="mr-2">
          Re-load
        </span>
        <v-icon>refresh</v-icon>
      </v-btn>
    </v-layout>

    <div v-if="!$store.state.Activity.processing && this.$data.posts && this.$data.posts.length">
      <v-card
        v-for="post in posts"
        :key="post.id"
        class="mb-2"
      >
        <v-card-title>
          <v-checkbox
            v-model="post.done"
            :label="post.title"
            :value="post.done"
            color="primary"
          />
          <v-spacer />
          <v-btn icon>
            <v-icon
              color="error"
              @click="removePost(post)"
            >
              delete
            </v-icon>
          </v-btn>
          <v-btn icon>
            <v-icon
              color="primary"
              @click="editPost(post)"
            >
              edit
            </v-icon>
          </v-btn>
        </v-card-title>
      </v-card>
    </div>

    <v-btn
      fab
      class="fab-bottom"
      color="accent"
    >
      <v-icon dark>
        add
      </v-icon>
    </v-btn>
  </v-layout>
</template>

<script>
export default {
  name: 'HomeView',
  data: () => ({
    posts: null,
  }),
  mounted() {
    this.fetchPosts();
  },
  methods: {
    fetchPosts() {
      this.$store
        .dispatch('Home/post.fetch')
        .then((response) => {
          this.$data.posts = response;
          // this.$data.posts = [];
        })
        .catch((error) => {
          console.log(error);
        });
    },

    editPost(post) {
      alert('editing...');
    },

    removePost(post) {
      const { posts } = this.$data;
      console.log(posts);
      posts.splice(posts.indexOf(post));
      this.$store.dispatch('Home/post.remove', post.id).then((response) => {
        const { posts } = this.$data;
        posts.splice(posts.indexOf(post));
      });
    },
  },
};
</script>
