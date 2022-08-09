<template>
    <div class="container container-field">
    <div class="card">
        <div class="card-body">
             <slot></slot>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    name:"ContentField",
}

</script>

<style scoped>

.container-field{
    margin-top: 20px;
}
</style>