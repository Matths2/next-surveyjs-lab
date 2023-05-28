// components/survey/index.tsx
import React from "react";
import { Model } from "survey-core";
import { Survey } from "survey-react-ui";
import "survey-core/modern.min.css";
import { Prisma } from "@prisma/client";

interface SurveyRenderComponentProps {
  content: Prisma.JsonValue;
}

const SurveyRenderComponent: React.FC<SurveyRenderComponentProps> = ({
  content,
}) => {
  // Create a model
  const survey = new Model(JSON.stringify(content));

  survey.sendResultOnPageNext = true;

  // Render the survey
  return (
    <div>
      <Survey model={survey} />
    </div>
  );
};

export default SurveyRenderComponent;
