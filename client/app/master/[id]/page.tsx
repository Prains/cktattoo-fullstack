import Master from "@/components/MasterPage/MasterPage";
import api from "@/utils/classes/Api";
import routes from "@/utils/routes";

const getMasters = async (id: string) => {
  const mastersData = await api.get(`${routes.backend}/api/masters/${id}?populate=portolioImages.image&populate=image.image&populate=workingPhoto.image`);

  return mastersData.data;
};

const MasterPage = async ({ params }: any) => {
  const { id } = params;
  const mastersData = await getMasters(id);
  console.log(mastersData);
  return <Master mastersData={mastersData} />;
};

export default MasterPage;
