import { css } from '@emotion/css';
import { vars } from 'style/vars';
import getDateDifference from 'utils/date';

interface DescriptionProps {
  width: number;
  height: number;
  updated_at: string;
  downloads: number;
}

function Description({
  width,
  height,
  updated_at,
  downloads,
}: DescriptionProps) {
  return (
    <div className={columnStyle}>
      <div className="column">
        <span className="label">이미지 크기</span>
        <span className="content">
          {width} x {height}
        </span>
      </div>
      <div className="column">
        <span className="label">업로드</span>
        <span className="content">{getDateDifference(updated_at)}</span>
      </div>
      <div className="column">
        <span className="label">다운로드</span>
        <span className="content">{downloads.toLocaleString()}</span>
      </div>
    </div>
  );
}
export default Description;

const columnStyle = css`
  display: flex;
  justify-content: flex-start;
  width: 60%;
  padding: 12px 24px;
  gap: 60px;
  white-space: nowrap;
  font-size: ${vars.fontSize.md};

  .column {
    display: flex;
    justify-content: center;
    flex-direction: column;
    height: 50px;
    .label {
      font-weight: ${vars.fontWeight[800]};
    }
  }
`;
