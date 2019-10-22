<template>
  <span>
    <nuxt-link :to="`/validators/${node_operator_address}`">{{ moniker }}</nuxt-link>
  </span>
</template>

<script>
export default {
  props: {
    address: {
      type: String,
      default: ""
    },
    valoper: {
      type: String,
      default: ""
    }
  },
  computed: {
    validators() {
      return this.$store.getters[`validators/validators`];
    },
    moniker() {
      if (!this.validators) return;

      let data;

      if (this.address) {
        data = this.validators.find(v => v.address === this.address);
      } else {
        data = this.validators.find(v => v.operator_address === this.valoper);
      }

      if (!data) return this.address;

      return data.description.moniker;
    },
    tm_address() {
      if (!this.validators) return;

      let data;

      if (this.address) {
        data = this.validators.find(v => v.address === this.address);
      } else {
        data = this.validators.find(v => v.operator_address === this.valoper);
      }

      if (!data) return;

      return data.address;
    },
    node_operator_address() {
      if (!this.validators) return;

      let data;

      if (this.address) {
        data = this.validators.find(v => v.address === this.address);
      } else {
        data = this.validators.find(v => v.operator_address === this.valoper);
      }

      if (!data) return this.address;

      return data.operator_address;
    }
  }
};
</script>
