import { testProjectList } from "@/app/constants/testProjectList";
import MainPage from "./components/mainPage";
import ColorMapLayout from "./context/ColorMapContext";
import RootDirLayout from "./context/RootDirContext";
import API from "@/app/utils/api";

export async function generateStaticParams() {
  const getProjectList = async () => {
    if (process.env.NEXT_PUBLIC_TEST === "test") {
      return testProjectList;
    } else {
      const projectList = API.getProjectList().then((res) => {
        return res.data.data.project_list;
      });
      return projectList;
    }
  };

  const projectList = await getProjectList();

  return projectList.map((projectName: any) => ({
    projectName: projectName,
  }));
}

export default async function Page({
  params,
}: {
  params: { projectName: string };
}) {
  return (
    <>
      <RootDirLayout projectName={params.projectName}>
        <ColorMapLayout>
          <MainPage projectName={params.projectName} />
        </ColorMapLayout>
      </RootDirLayout>
    </>
  );
}
