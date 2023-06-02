import React from 'react'
import { Model } from 'survey-core'
import { Survey } from 'survey-react-ui'
import 'survey-core/modern.min.css'
import { Prisma } from '@prisma/client'

interface SurveyRenderComponentProps {
  content: Prisma.JsonValue
}

const SurveyRenderComponent: React.FC<SurveyRenderComponentProps> = ({
  content,
}) => {
  const survey = new Model(JSON.stringify(content))

  survey.sendResultOnPageNext = true
  survey.onComplete.add(function (result) {
    // Write survey results into database
    console.log(result.data)
  })

  return (
    <div>
      <Survey model={survey} />
    </div>
  )
}

export default SurveyRenderComponent
