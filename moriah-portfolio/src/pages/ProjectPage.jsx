import { ProjectHero } from '../components/project-sections/ProjectHero';
import { ProjectOverview } from '../components/project-sections/ProjectOverview';
import { UserPersonas } from '../components/project-sections/UserPersonas';
import { UserFlow } from '../components/project-sections/UserFlow';
import { Wireframes } from '../components/project-sections/Wireframes';
import { DesignSystem } from '../components/project-sections/DesignSystem';
import { Challenges } from '../components/project-sections/Challenges';
import { NextSteps } from '../components/project-sections/NextSteps';
import { Conclusion } from '../components/project-sections/Conclusion';
import { Purpose } from '../components/project-sections/Purpose';
import { VectorIllustration } from '../components/project-sections/VectorIllustration';
import { Assembly } from '../components/project-sections/Assembly';
import { VersionAudit } from '../components/project-sections/VersionAudit';
import { CollaborationProcess } from '../components/project-sections/CollaborationProcess';

export const ProjectPage = ({ data }) => {
  const {
    title,
    description,
    overview,
    personas,
    userFlow,
    wireframes,
    designSystem,
    challenges,
    nextSteps,
    conclusion,
    purpose,
    vectorIllustration,
    assembly,
    versionAudit,
    collaborationProcess,
  } = data;

  return (
    <div className="project-page">
      {title && description && (
        <ProjectHero title={title} description={description} />
      )}
      {overview && (
        <ProjectOverview {...overview} />
      )}
      {purpose && (
        <Purpose {...purpose} />
      )}
      {vectorIllustration && (
        <VectorIllustration {...vectorIllustration} />
      )}
      {assembly && (
        <Assembly {...assembly} />
      )}
      {versionAudit && (
        <VersionAudit {...versionAudit} />
      )}
      {personas && (
        <UserPersonas {...personas} />
      )}
      {userFlow && (
        <UserFlow {...userFlow} />
      )}
      {wireframes && (
        <Wireframes {...wireframes} />
      )}
      {designSystem && (
        <DesignSystem {...designSystem} />
      )}
      {collaborationProcess && (
        <CollaborationProcess {...collaborationProcess} />
      )}
      {challenges && (
        <Challenges {...challenges} />
      )}
      {nextSteps && (
        <NextSteps {...nextSteps} />
      )}
      {conclusion && (
        <Conclusion {...conclusion} />
      )}
    </div>
  );
};
