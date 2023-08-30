import React from 'react'
import Layout from '../../components/Layout'
import { portfolio } from "../../styles/projects.module.css"

export default function Projects() {
  return (
    <Layout>
      <section>
        <div className={portfolio}>
          <h2>Project & Portfolio</h2>
          <h3>Here all my projects & websites</h3>
        </div>
      </section>
    </Layout>
  )
}
