import styles from './BookCard.module.css';

type BookCardProps = {
  title: string;
  author: string;
};

export default function BookCard({ title, author }: BookCardProps) {
  return (
    <div className={styles.card}>
      <h3>{title}</h3>
      <p>by {author}</p>
    </div>
  );
}
