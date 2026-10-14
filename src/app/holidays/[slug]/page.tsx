import type { Metadata } from "next";
import { Detail } from "@/components/marketplace/detail";
import { packages } from "@/lib/packages";
import { notFound } from "next/navigation";

type PackagePageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: PackagePageProps): Promise<Metadata> {
  const { slug } = await params;
  return { title: slug.replaceAll("-", " ") };
}

export default async function PackagePage({ params }: PackagePageProps) {
  const { slug } = await params;
  const item=packages.find((item) => item.slug === slug); if(!item) notFound(); return <Detail item={item} />;
}
