import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectColumns } from "../../../selectors/columns";
import { selectHiddenColumns } from '../../../selectors';
import { Filters } from '../Filters';
import { createHiddenColumnsAction } from '../../../reducers';
import { ColumnName } from '../../../models';

export const ColumnFilters = () => {
  const columns = useSelector(selectColumns);
  const hiddenColumns = useSelector(selectHiddenColumns);
  const dispatch = useDispatch();

  if (columns.size === 0) {
    return null;
  }

  return (
    <Filters 
      title='Visible Colunms'
      filters={[...columns]}
      isFilterSelected={(f: ColumnName) => !hiddenColumns.has(f) }
      onFilterSelect={(f: ColumnName) => dispatch(createHiddenColumnsAction(f))}
    />
  )
};
