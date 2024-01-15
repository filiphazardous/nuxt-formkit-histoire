<script setup lang="ts">
  interface Props {
    type: string;
    label: string;
    help?: string | undefined;
    validation?: string;
    prefixIcon?: string | undefined;
    suffixIcon?: string | undefined;
    disabled?: boolean;
    color?: string | undefined;
  }
  const props = withDefaults(defineProps<Props>(), {
    type: 'text',
    label: '',
    help: undefined,
    validation: undefined,
    prefixIcon: undefined,
    suffixIcon: undefined,
    disabled: false,
    color: undefined,
  });
</script>

<template>
  <FormKit
    :type="props.type"
    :label="props.label"
    :help="props.help"
    :validation="props.validation"
    :suffix-icon="props.suffixIcon"
    :prefix-icon="props.prefixIcon"
    :disabled="props.disabled"
    :color="props.color"
  />
</template>

