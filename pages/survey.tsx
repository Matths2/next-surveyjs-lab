import React from 'react'
import dynamic from 'next/dynamic'
import { GetStaticProps } from 'next'
import { Survey } from '@prisma/client'
import { getSurveys } from '../lib/survey'

const SurveyComponent = dynamic(
  () => import('../components/survey/surveyRender'),
  {
    ssr: false,
  },
)

export const getStaticProps: GetStaticProps<{
  surveys: Survey[]
}> = async () => {
  return await getSurveys()
}

type Props = {
  surveys: Survey[]
}

const Survey: React.FC<Props> = (props) => {
  return (
    <div className="page">
      <main>
        {props.surveys.map((survey) => (
          <div key={survey.id}>
            <SurveyComponent content={survey.content} />
          </div>
        ))}
      </main>
    </div>
  )
}

export default Survey
