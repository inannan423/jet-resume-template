import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import Main from "./Main";
import { exportPDF } from "./exportPDF";
import { NextUIProvider, Button } from "@nextui-org/react";
export default function Home() {
  return (
    <NextUIProvider>
      <div className={styles.container}>
        <Head>
          <title>JetResume Template</title>
          <meta name="description" content="Made with ❤ by Jetzihan" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className="h-96 w-96 bg-blue-300 bg-opacity-80 fixed -z-50 top-5 blur-3xl rounded-full"></div>
        <div className="h-96 w-96 bg-blue-200 bg-opacity-60 fixed -z-50 left-36 top-20 blur-3xl rounded-full"></div>
        <div className="h-96 w-96 bg-violet-200 bg-opacity-60 fixed -z-50 right-0 top-96 blur-3xl rounded-full"></div>
        <div className="h-96 w-96 bg-pink-200 bg-opacity-60 fixed -z-50 right-0 bottom-5 blur-3xl rounded-full"></div>

        <main className={styles.main}>
          <div className="font-sans text-4xl font-bold ">
            Create Your Resume in Minutes with{" "}
            <text className="text-blue-600">JetResume.</text>
          </div>
          <Button.Group color="primary" light className="mb-5">
            <Link href={"/MainScreen"} target={"_blank"}>
              <Button>全屏预览</Button>
            </Link>
            {/* <Button>转为PDF</Button> */}
          </Button.Group>
          <Main />
        </main>

        <footer className="flex justify-center py-10">
          Build by &nbsp;
          <a
            href="https://jetzihan.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Jetzihan
          </a>
        </footer>
      </div>
    </NextUIProvider>
  );
}
