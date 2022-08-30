import { useImperativeHandle } from 'react';

type ListProps<ItemType> = {
  items: ItemType[];
  innerRef?: React.Ref<{ scrollToItem(item: ItemType): void }>;
};

export function UseImperativeHandleTeste<ItemType>(props: ListProps<ItemType>) {
  useImperativeHandle(props.innerRef, () => ({
    scrollToItem() {},
  }));
  return null;
}
