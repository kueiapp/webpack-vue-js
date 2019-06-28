<template>
  <div class="message">
      {{ message }}
  </div>
</template>

<script>
export default {
	data () {
    return {
  	  message: 'Hello, component in .vue file'
    }
	}
}
</script>

<style scoped>
  .message {
    color: blue;
  }
</style>