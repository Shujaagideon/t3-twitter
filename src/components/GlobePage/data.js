
import { ISR_TIMEOUT } from 'utils/functions/getIsrTimeout';
import { getProjectData } from 'utils/functions/strapi/getProjectData';
import { getAllProjectsData } from 'utils/functions/strapi/getAllProjectsData';
import { getLocalizedText } from 'utils/i18n';


export const getStaticProps = async ({ locale }) => {
  const projectData = (await getProjectData('globe')) ;
  const allProjectsData = await getAllProjectsData();
  const projectHead = projectData.localizedHead;

  const head = {
    title: getLocalizedText(projectHead.localizedTitle, locale),
    description: getLocalizedText(projectHead.localizedDescription, locale),
    ogType: projectHead.ogType,
    ogImage: projectHead.ogImage,
  };

  return {
    props: {
      allProjectsData,
      projectData,
      head,
    },
    revalidate: ISR_TIMEOUT,
  };
};
