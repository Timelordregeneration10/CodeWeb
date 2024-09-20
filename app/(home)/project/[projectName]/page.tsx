import MainPage from "./components/mainPage";
import ColorMapLayout from "./context/ColorMapContext";
import RootDirLayout from "./context/RootDirContext";

export async function generateStaticParams() {
  const posts = await fetch('https://timelordregeneration10.github.io/CodeWeb/project').then((res) => res.json())

  return posts.map((post:any) => ({
    porjectName: post.porjectName,
  }))
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
