import AppLayout from "@/components/layouts/AppLayout";
import OurDoctors from "@/components/organisms/OurDoctors";
import ReportRapeForm from "@/components/organisms/ReportRapeForm";



export default function Home() {
  return (
    <AppLayout>
      <OurDoctors />
      <ReportRapeForm />
    </AppLayout>
  );
}
