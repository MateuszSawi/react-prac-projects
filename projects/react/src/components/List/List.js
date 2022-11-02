import styles from './List.module.scss';
import Column from '../Column/Column';

const List = () => {

  const columns = [
    { id: 1, title: 'Books', icon: 'book' },
    { id: 2, title: 'Movies', icon: 'film' },
    { id: 3, title: 'Games', icon: 'gamepad' }
  ];

  setTimeout(() => {
    columns.push({ id: 4, title: 'Test column'});
  }, 2000);

  return (
  <div className={styles.list}>
    <header className={styles.header}>
      <h2 className={styles.title}>Things to do<span>soon!</span></h2>
    </header>
    <p className={styles.description}>Interesting things I want to check out</p>
    {/* <section className={styles.columns}>
      <Column text='Books' icon='book'/>
      <Column text='Movies' icon='film'/>
      <Column text='Games' icon='gamepad'/>
    </section> */}
    <section className={styles.columns}>
      {columns.map(column => <Column key={column.id} text={column.title} icon={column.icon} />)}
    </section>
  </div>
  );
 };

 export default List;
 