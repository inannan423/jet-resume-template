import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import content from "../content";
// import { exportPDF } from "./exportPDF";
import { Avatar, Grid, Badge } from "@nextui-org/react";
import { Call, Message, Discovery, Calendar } from "react-iconly";
export default function Main() {
  //  在"default","primary","secondary","success","warning","error",中返回随机值
  const randomColor = () => {
    const colors = ["primary", "secondary", "success", "warning", "error"];
    return colors[Math.floor(Math.random() * colors.length)];
  };
  // function exportpdf() {
  //   console.log("exportpdf");
  //   let ele = document.getElementById("main");
  //   exportPDF("doc.pdf", ele);
  // }
  return (
    <>
      {/* 将页面分为左右两部分 */}
      <div
        className="flex flex-row h-max shadow-2xl bg-white "
        style={{ width: "1190px" }}
        id="main"
      >
        {/* 左侧部分 */}
        <div className="w-3/12 bg-gray-50 overflow-hidden relative p-2">
          <div className="h-64 w-64 bg-sky-100 bg-opacity-70 absolute z-1 left-10 top-5 blur-3xl rounded-full"></div>
          <div className="h-64 w-64 bg-red-50 bg-opacity-70 absolute z-1 left-0 top-96 blur-3xl rounded-full"></div>
          <div className="h-72 w-72 bg-blue-50 bg-opacity-70 absolute z-1 left-0 top-1/2 blur-3xl rounded-full"></div>
          <div className="h-72 w-72 bg-purple-50 bg-opacity-70 absolute z-1 left-0 top-3/4 blur-3xl rounded-full"></div>
          <div className="flex flex-col items-center mt-5 z-10">
            {/* 头像 */}
            <div className="flex flex-col items-center z-10 border-b-2">
              <Avatar
                size="lg"
                src={content.basicInfo.avatar}
                squared
                css={{ height: "100px", width: "100px" }}
              />
              <h1 className="font-sans text-blue-600 text-2xl font-bold mt-2">
                {content.basicInfo.name}
              </h1>
              <h2 className="font-sans text-gray-800 text-lg font-bold ">
                应聘岗位: {content.basicInfo.job}
              </h2>
            </div>
            <div className="flex flex-col mt-10 pb-10 z-10 items-center border-b-2">
              <h1 className="text-xl">基本信息</h1>
              <div className="flex flex-col w-max my-1 h-max justify-center items-center ">
                <div className="flex">
                  <text className="font-sans text-gray-600 text-lg font-bold flex text-center">
                    年龄： {content.basicInfo.age}
                  </text>
                </div>
              </div>
              <div className="flex flex-col w-max my-1 h-max justify-center items-center ">
                <div className="flex">
                  <text className="font-sans text-gray-600 text-lg font-bold flex text-center">
                    地址： {content.basicInfo.location}
                  </text>
                </div>
              </div>
            </div>
            <div className="flex flex-col mt-10 pb-10 z-10 items-center border-b-2">
              <h1 className="text-xl">联系方式</h1>
              <div className="flex flex-col w-max my-1 h-max justify-center items-center ">
                <div className="flex ">
                  <Message set="light" primaryColor="blue" />
                  <h1 className="text-base text-blue-600 ml-2">电子邮件</h1>
                </div>
                <div className="flex">
                  <text className="font-sans text-gray-600 text-lg font-bold flex text-center">
                    {content.basicInfo.email}
                  </text>
                </div>
              </div>
              <div className="flex flex-col w-max my-1 h-max justify-center items-center ">
                <div className="flex ">
                  <Call set="light" primaryColor="blue" />
                  <h1 className="text-base text-blue-600 ml-2">联系电话</h1>
                </div>
                <div className="flex">
                  <text className="font-sans text-gray-600 text-lg font-bold flex text-center">
                    {content.basicInfo.phone}
                  </text>
                </div>
              </div>
              <div className="flex flex-col w-max my-1 h-max justify-center items-center ">
                <div className="flex ">
                  <Discovery set="light" primaryColor="blue" />
                  <h1 className="text-base text-blue-600 ml-2">个人网站</h1>
                </div>
                <div className="flex">
                  <text className="font-sans text-gray-600 text-lg font-bold flex text-center">
                    <a
                      href={content.basicInfo.website}
                      className="text-gray-600"
                      target={"_blank"}
                    >
                      {content.basicInfo.website}
                    </a>
                  </text>
                </div>
              </div>
            </div>
            <div className="flex flex-col mt-10 pb-10 z-10 items-center border-b-2">
              <h1 className="text-xl">社交媒体</h1>
              {content.socialMedia.map((item) => (
                <div
                  key={item.name}
                  className="flex flex-col w-max my-1 h-max justify-center items-center "
                >
                  <div className="flex">
                    <h1 className="text-base text-red-600 ml-2">{item.name}</h1>
                  </div>
                  <div className="flex">
                    <text className="font-sans text-gray-600 text-md font-bold flex text-center">
                      <a
                        href={item.url}
                        className="text-gray-600"
                        target={"_blank"}
                      >
                        {item.url}
                      </a>
                    </text>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex flex-col mt-10 pb-10 z-10 items-center ">
              <h1 className="text-xl">技能标签</h1>
              <Grid.Container gap={1}>
                {content.techList.map((item) => (
                  <Grid>
                    <Badge enableShadow disableOutline color={randomColor()}>
                      {item}
                    </Badge>
                  </Grid>
                ))}
              </Grid.Container>
            </div>
          </div>
        </div>
        {/* 右侧部分 */}
        <div className="w-9/12 p-5">
          <div className="flex flex-col">
            <div className="flex flex-col mt-5 pb-5  z-10 border-b-2 my-3">
              <h1 className="text-3xl font-bold">教育经历</h1>
              {content.education.map((item) => (
                <div
                  key={item.name}
                  className="w-full h-max bg-gray-100 my-2 rounded-xl p-3"
                >
                  <div className="flex justify-between">
                    <h1 className="text-lg text-blue-600">{item.name}</h1>
                    <h1 className="text-lg text-gray-600">{item.type}</h1>
                    <h1 className="text-lg">{item.time}</h1>
                  </div>
                  {item.des.map((item) => (
                    <div className="flex">
                      <h1 className="text-sm font-bold text-gray-900">
                        {item.name} :
                      </h1>
                      <h1 className="text-sm text-gray-600"> {item.detail}</h1>
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <div className="flex flex-col mt-5 pb-5  z-10 border-b-2 my-3">
              <h1 className="text-3xl font-bold">工作 / 实习经历</h1>
              {content.workExperience.map((item) => (
                <div
                  key={item.name}
                  className="w-full h-max bg-blue-100 my-2 rounded-xl p-3"
                >
                  <div className="flex justify-between">
                    <h1 className="text-lg text-blue-600">{item.name}</h1>
                    <h1 className="text-lg">{item.time}</h1>
                  </div>
                  {item.des.map((item) => (
                    <div className="flex">
                      <h1 className="text-sm font-bold text-gray-900">
                        {item.name}:
                      </h1>
                      <h1 className="text-sm text-gray-600"> {item.detail}</h1>
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <div className="flex flex-col mt-5 pb-5  z-10 border-b-2 my-3">
              <h1 className="text-3xl font-bold">项目经历</h1>
              <div className="grid grid-cols-2 gap-2">
                {content.projects.map((item) => (
                  <div
                    key={item.name}
                    className="w-full h-max bg-gray-100 my-2 rounded-xl p-3"
                  >
                    <div className="flex justify-between">
                      <h1 className="text-lg text-blue-600">{item.name}</h1>
                      <h1 className="text-lg">{item.time}</h1>
                    </div>
                    {item.des.map((item) => (
                      <div className="flex">
                        <h1 className="text-sm font-bold text-gray-900">
                          {item.name}: {item.detail}
                        </h1>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-col mt-5 pb-5  z-10  my-3">
              <h1 className="text-3xl font-bold">所得荣誉</h1>

              {content.glory.map((item) => (
                <div
                  key={item.name}
                  className="w-96 h-max my-1 flex rounded-xl "
                >
                  <h1 className="text-sm font-bold text-gray-900">
                    {item.name} :
                  </h1>
                  &nbsp;
                  <h1 className="text-sm text-gray-600"> {item.des}</h1>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
