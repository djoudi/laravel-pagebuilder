<template>
    <div class="choose-element-component">
        <div id="divWheel" class="blub" style="height: 320px; width: 320px" data-wheelnav
             data-wheelnav-wheelradius="160"
             data-wheelnav-slicepath="DonutSlice"
             data-wheelnav-colors="rgba(255, 65, 108, 0.5), rgba(255, 65, 108, 0.5)"
             data-wheelnav-rotateoff>
            <div data-wheelnav-navitemtext="D" onmouseup="this.blub"></div>
            <div data-wheelnav-navitemtext="S"></div>
            <div data-wheelnav-navitemtext="A"></div>
            <div data-wheelnav-navitemtext="W"></div>
        </div>
    </div>
</template>

<script lang="ts" src="./ChooseElementComponent.ts"></script>

<style lang="scss" src="./ChooseElementComponent.scss" scoped></style>