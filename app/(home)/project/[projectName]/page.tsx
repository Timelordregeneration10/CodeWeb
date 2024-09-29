import MainPage from "./components/mainPage";
import ColorMapLayout from "./context/ColorMapContext";
import RootDirLayout from "./context/RootDirContext";

// TODO

export const dynamicParams = false;
export async function generateStaticParams() {
  return [];
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
