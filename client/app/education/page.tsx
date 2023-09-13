import EducationPage from "@/components/EducationPage/EducationPage";
import api from "@/utils/classes/Api";
import routes from "@/utils/routes";

const getEducationProgramms = async () => {
  const programms = await api.get(`${routes.backend}/api/educations?populate=*`);
  return programms.data;
};

const Education = async () => {
  const educationProgramms = await getEducationProgramms();

  return <EducationPage educationProgramms={educationProgramms} />;
};

export default Education;
