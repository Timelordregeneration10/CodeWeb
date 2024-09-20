import MainPage from "./components/mainPage";
import ColorMapLayout from "./context/ColorMapContext";
import RootDirLayout from "./context/RootDirContext";

export const dynamic = 'force-static'

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
