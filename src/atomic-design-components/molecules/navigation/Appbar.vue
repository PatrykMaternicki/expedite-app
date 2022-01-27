<template>
  <div
    class="moleculesNavigationAppbar"
  >
    <v-app-bar
      app
      class="moleculesNavigationAppbar"
      color="#0a0a0a"
      dark
    >
      <atoms-buttons-icon
        icon="arrow-left"
      />
      <div class="pl-4 d-flex">
        <atoms-logo />
      </div>
      <div class="pl-4 d-flex">
        <p
          v-if="title"
          class="mb-0 moleculesNavigationAppbar__paragraph"
        >
          {{ title }}
          <span class="pl-4 moleculesNavigationAppbar__paragraph--bold">
            {{ boldText }}
          </span>
        </p>
      </div>
    </v-app-bar>
    <div
      v-if="cardText"
      class="moleculesNavigationAppbar__bottom"
    >
      {{ cardText }}
    </div>
  </div>
</template>
<script>
import AtomsButtonsIcon from '@/atomic-design-components/atoms/buttons/Icon';
import AtomsLogo from '@/atomic-design-components/atoms/Logo';

export default {
  name: 'MoleculesNavigationAppbar',

  components: {
    AtomsButtonsIcon,
    AtomsLogo,
  },

  props: {
    title: {
      type: String,
      default: undefined,
    },

    boldText: {
      type: String,
      default: undefined,
    },

    cardText: {
      type: String,
      default: undefined,
    },
  },
};
</script>
<style lang="scss">
  $class-name: 'moleculesNavigationAppbar';

  .#{$class-name} {
    box-shadow: inherit !important;

    .v-toolbar__content, .v-toolbar__extension {
      padding: 0 !important;
    }

    .#{$class-name}__paragraph {
      color: #acacac;
      display: flex;
      align-items: center;
      font-size: 13px;
    }

    .#{$class-name}__paragraph--bold {
      color: white;
      font-weight: 700;
      font-size: 16px;
    }

    .#{$class-name}__bottom {
      height: 89px;
      font-size: 19px;
      line-height: 89px;
      font-weight: 700;
      margin-top: 64px;
      padding-left: 30px;
      border-bottom: 1px solid #ededed;
      background-color: #fff;
    }
  }
</style>
