import ColorMapLayout from "./context/ColorMapContext";
import RootDirLayout from "./context/RootDirContext";
import dynamic from "next/dynamic";

const MainPage = dynamic(
  () => import("@/app/(home)/project/[projectName]/components/mainPage"),
  { ssr: false }
);

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
