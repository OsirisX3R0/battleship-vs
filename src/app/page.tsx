import Link from 'next/link'
import styles from './page.module.css'

const {snowflakeGenerator} = require('snowflake-id-js')

const generator = snowflakeGenerator(512)

export default function Home() {
  return (
    <main className={styles.main}>
      <Link href={`/game?g=${generator.next().value}`}>
      <button className={styles.start}>New Game</button></Link>
    </main>
  )
}
