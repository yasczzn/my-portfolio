import { Link } from 'gatsby'
import * as React from "react"
import Layout from "../components/Layout"
import { header, btn } from "../styles/home.module.css"

export default function Home() {
  return ( 
    <Layout>
      <section className={header}>
        <div>
          <h2>Design</h2>
          <h3>Develop & Deploy</h3>
          <p>UX Designer & web developer based in Indonesia</p>
          <Link className={btn} to='/projects'>My Portfolio</Link>
        </div>
        <img src="/diamond.png" alt="home" style={{ maxWidth: '70%' }}/>
      </section>
    </Layout>
  )
}