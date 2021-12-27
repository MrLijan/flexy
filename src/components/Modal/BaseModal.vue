<template>
    <div class="modal-wrapper">
        <div class="modal-box">
<slot></slot>
        </div>
    </div>
</template>

<script>
export default {

};
</script>

<style lang="scss" scoped>
.modal-wrapper {
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;

    // background: radial-gradient($app-white, $app-dark);
    background: radial-gradient(transparentize($app-dark, 0.9), transparentize($app-dark, 0.3));

    display: grid;
    place-items: center;
}

.modal-box {
    min-width: 33%;
    min-height: 44%;
    background-color: white;
}

</style>
