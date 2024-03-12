import { css } from '@emotion/css';
import { Button } from 'components';

function TagList({ tags }: { tags: { title: string }[] }) {
  return (
    <ul
      className={css`
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        gap: 8px;
        list-style: none;
        margin: 0;
        padding: 12px 24px;
      `}
    >
      {tags.map((tag) => (
        <Button key={tag.title} variant="secondary" size="small">
          {tag.title}
        </Button>
      ))}
    </ul>
  );
}
export default TagList;
