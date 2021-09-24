import { UUIEvent } from '@umbraco-ui/uui-base/events';
import { UUITextFieldElement } from './uui-textfield.element';

export class UUITextFieldEvent extends UUIEvent<{}, UUITextFieldElement> {
  public static readonly CHANGE: string = 'change';
}