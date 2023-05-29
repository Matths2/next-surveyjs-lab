import React from 'react'
import dynamic from 'next/dynamic'
import { GetStaticProps } from 'next'
import { Survey } from '@prisma/client'
import { getSurveys } from '../lib/survey'
import Layout from '../src/components/Layout'

const SurveyComponent = dynamic(
  () => import('../src/components/survey/SurveyRender'),
  {
    ssr: false,
  },
)

export const getStaticProps: GetStaticProps<{
  surveys: Survey[]
}> = async () => {
  return getSurveys()
}

type Props = {
  surveys: Survey[]
}

const Survey: React.FC<Props> = (props) => {
  return (
    <Layout>
      <div className="page">
        <main>
          {props.surveys.map((survey) => (
            <div key={survey.id}>
              <SurveyComponent content={survey.content} />
            </div>
          ))}
        </main>
      </div>
      <style jsx>{`
        .post {
          background: white;
          transition: box-shadow 0.1s ease-in;
        }

        .post:hover {
          box-shadow: 1px 1px 3px #aaa;
        }

        .post + .post {
          margin-top: 2rem;
        }
      `}</style>
    </Layout>
  )
}

export default Survey
