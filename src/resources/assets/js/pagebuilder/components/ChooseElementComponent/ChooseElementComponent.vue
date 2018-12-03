<template>
    <div class="choose-element-component">
        <canvas @click="selectElement" width="350" height="350" :id="id"></canvas>
    </div>
</template>

<script lang="ts" src="./ChooseElementComponent.ts"></script>

<style lang="scss" src="./ChooseElementComponent.scss" scoped></style>