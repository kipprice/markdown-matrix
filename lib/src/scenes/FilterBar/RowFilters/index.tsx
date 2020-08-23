import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectRows, selectHiddenRows } from "../../../selectors";
import { Filters } from '../Filters';
import { createHiddenRowsAction } from '../../../reducers';
import { RowName } from '../../../models';

export const RowFilters = () => {
  const rows = useSelector(selectRows);
  const hiddenRows = useSelector(selectHiddenRows);

  const dispatch = useDispatch();

  if (rows.size === 0) {
    return null;
  }

  return (
    <Filters 
      title='Visible Rows:'
      filters={[...rows]}
      isFilterSelected={(f: RowName) => !hiddenRows.has(f) }
      onFilterSelect={(f: RowName) => dispatch(createHiddenRowsAction(f, 'TOGGLE_ROW'))}
    />
  )
};
