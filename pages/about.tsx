import Head from '../components/head'
import readMe from '../README.md'

import Markdown from '../components/Markdown'

export default function About() {
  return (
    <>
      <Head title={'About'} />
      <Markdown markdown={readMe}/>
    </>
  )
}
