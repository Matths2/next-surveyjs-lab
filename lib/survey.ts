import { Prisma } from '@prisma/client'
import prisma from './prisma'

export async function getSurveys() {
  try {
    const surveys = await prisma.survey.findMany({})
    return {
      props: {
        surveys: surveys,
      },
    }
  } catch (error) {
    console.log(error)
    return {
      props: {
        surveys: [],
      },
    }
  }
}

export async function saveSurveyResponse(
  answer: Prisma.InputJsonValue,
  surveyId: string,
) {
  try {
    const surveyRes = await prisma.surveyResponse.create({
      data: {
        answer: answer,
        surveyId: surveyId,
      },
    })
    return {
      props: {
        surveyRes: surveyRes,
      },
    }
  } catch (error) {
    console.log(error)
  }
}
