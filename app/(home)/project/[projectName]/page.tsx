import MainPage from "./components/mainPage";
import ColorMapLayout from "./context/ColorMapContext";
import RootDirLayout from "./context/RootDirContext";
import { headers } from "next/headers";

export async function generateStaticParams() {
  const url=headers().get("x-forwarded-host");
  const posts = await fetch(url+'/project').then((res) => res.json())

  return posts.map((post:any) => ({
    projectName: post.projectName,
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
