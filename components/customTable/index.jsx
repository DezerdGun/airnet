import styles from "./customTable.module.scss";

export default function CustomTable({ table }) {
  return <div className={styles.customTable}>{table}</div>;
}
