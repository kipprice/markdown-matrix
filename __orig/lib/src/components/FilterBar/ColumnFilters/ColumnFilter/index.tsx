// import React, { useCallback } from "react";
// import { ColumnName, State } from "../../../../models";
// import { useSelector, useDispatch } from "react-redux";
// import { createHiddenColumnsAction } from "../../../../reducers";
// import { selectColumnVisibility } from "../../../../selectors/visibility";
// import { Filter } from "../../Filters/Filter";

// export type ColumnFilterProps = {
//   column: ColumnName;
// };

// export const ColumnFilter = ({ column }: ColumnFilterProps) => {
//   const isVisible = useSelector((s: State) =>
//     selectColumnVisibility(s, column, true)
//   );
//   const dispatch = useDispatch();

//   const onClick = useCallback(() => {
//     dispatch(createHiddenColumnsAction(column));
//   }, []);

//   return <Filter label={column} onToggle={onClick} isSelected={isVisible} />;
// };
