import CategoryNavMenu from "./CategoryNavMenu";
import IngredientMenu from "./IngredientMenu";
import classes from "./SelectorMenu.module.css";

const SelectorMenu = () => {
  return (
    <div className={classes.selectorMenu}>
      <CategoryNavMenu />
      <IngredientMenu />
    </div>
  );
};

export default SelectorMenu;
