import Vue, { VNode } from 'vue';

declare global {
  namespace JSX {
    // tslint:disable no-empty-interface
    interface IElement extends VNode {} // I
    // tslint:disable no-empty-interface
    interface IElementClass extends Vue {} // I
    interface IIntrinsicElements {
      // I
      [elem: string]: any;
    }
  }
}
