<template>
    <div class="pagebuilder-column"  :class="column.column_size">
        <div class="no-element-wrapper" v-if='column.element_type_id === 0'>
            <choose-element-component :elements="getElementTypes" :id="column.uuid"></choose-element-component>
            <plus class="add-element"></plus>
        </div>
        <div v-else>
            <component :is="component" :old-translations="column.translations" @onImageUpload="onImageUpload"></component>
        </div>
    </div>
</template>

<script lang="ts" src="./ColumnComponent.ts"></script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" src="./ColumnComponent.scss"></style>
