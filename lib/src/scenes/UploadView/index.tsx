import React from "react";
import styled from '@emotion/styled';
import { useSelector } from "react-redux";
import { selectHasElements } from "../../selectors/elements";
import { UploadButton } from "../../components/UploadButton";
import { fontFamilies, colors } from '../../helpers/styles';

export const UploadView: React.FC = () => {
  const hasCompetencies = useSelector(selectHasElements);

  return (
    <StyledUploadView c={colors} className={hasCompetencies ? "hidden" : ""}>
      <UploadButton label="Upload File(s)" />
      <StyledContent f={fontFamilies} className="content">
        <StyledH3 f={fontFamilies}>First Time Here?</StyledH3>
        <span>This tool takes in markdown (*.md) files in the format of:</span>

        {/* prettier-ignore */}
        <StyledPre c={colors} f={fontFamilies}>{`
# [Header of file]

[optional description]

## [Row Name 1]

### [Column Name A]

- item for row 1 and column A
- another item for row 1 and column A

### [Column Name B]

- the only item for row 1 and column B

## [Row Name 2]

### [Column Name A]

- item for row 2 and column A
- another item for row 2 and column A

...
          `}</StyledPre>
        <StyledPostPre>
          This format will be turned into a matrix view with the corresponding
          headers being converted to row and column names.
        </StyledPostPre>
      </StyledContent>
    </StyledUploadView>
  );
};


const StyledUploadView = styled.div<{ c: typeof colors}>`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${p => p.c.light};

  &.hidden {
    display: none;
  }
`;

const StyledContent = styled.div<{ f: typeof fontFamilies }>`
  max-width: 25vw;
  line-height: 2rem;
  margin: 0 5rem;
  
  span, 
  div {
    font-family: ${p => p.f.bodyFont}
  }
`;

const StyledH3 = styled.h3<{ f: typeof fontFamilies }>`
  font-family: ${p => p.f.headerFont};
  margin-top: 1rem;
`;

const StyledPre = styled.pre<{ c: typeof colors, f: typeof fontFamilies }>`
  text-align: left;
  font-family: ${p => p.f.bodyFont};
  background-color: ${p => p.c.lightTheme};
  color: ${p => p.c.darkTheme};
  line-height: 1rem;
  padding: 0 1rem;
  box-sizing: border-box;
`;

const StyledPostPre = styled.div`
  margin: 1rem 0;
`;
