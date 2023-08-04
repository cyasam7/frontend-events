import { FC } from "react";

import { IOption } from "../Drawer";

import MultiLevel from "./MultiLevel";
import SingleLevel from "./SingleLevel";

export interface ICustomMenuItem {
  item: IOption;
  isSelected?: boolean;
  isDrawerOpened?: boolean;
  isBottom?: boolean;
}

/**
 * El componente para cada uno de los elementos del Drawer
 * @param {IOption}item La pantalla a la que se quiere ir
 * @param {boolean}isSelected Indica si ya se seleccionó la opción
 * @param {boolean}isDrawerOpened Indicar si el Drawer está abierto
 */

const CustomMenuItem: FC<ICustomMenuItem> = ({
  item,
  isSelected,
  isDrawerOpened,
  isBottom,
}) => {
  const hasChildren = (item: IOption) => {
    const { children } = item;
    return children && children.constructor === Array && children.length > 0;
  };

  return hasChildren(item) ? (
    <MultiLevel item={item} isDrawerOpened={isDrawerOpened} />
  ) : (
    <SingleLevel
      item={item}
      isBottom={isBottom}
      isSelected={isSelected}
      isDrawerOpened={isDrawerOpened}
    />
  );
};

export default CustomMenuItem;
