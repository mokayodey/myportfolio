import type { Metadata } from "next";
import CaseNav from "@/components/CaseNav";
import CaseHero from "@/components/CaseHero";
import Section from "@/components/Section";
import SectionRow from "@/components/SectionRow";
import FullImage from "@/components/FullImage";
import NextCaseStudy from "@/components/NextCaseStudy";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Helium Health — Tosin Ariyibi",
};

export default function HeliumHealth() {
  return (
    <div className="min-h-screen w-full bg-canvas text-ink">
      <CaseNav />

      <CaseHero
        eyebrow="Senior Product Designer · 2021–2025"
        title="Helium Health — the EMR powering West Africa's healthcare system."
        intro="Led design on Helium OS, the flagship EMR/HMIS platform, driving expansion into the Middle East and growth across Nigeria and East Africa."
        facts={[
          { label: "Role", value: "Senior Product Designer — Helium OS" },
          {
            label: "Scope",
            value:
              "Product design, research, usability testing, design system, brand & UI kit",
          },
          { label: "Platform", value: "Desktop web (EMR/HMIS)" },
        ]}
      />

      <div className="px-4 pt-12 sm:px-5 md:px-14">
        <FullImage
          src="/assets/helium-background.png"
          alt="Helium Health"
          className="rounded"
        />
      </div>

      <SectionRow label="Background, goals & function">
        <p className="mb-5 text-base font-normal leading-relaxed text-ink/82 md:text-lg">
          Helium Health rapidly digitizes hospitals and clinics with its
          EMR/HMIS product — extending into telemedicine, provider
          financing, claims processing for payers, and epidemiological data
          for partners.
        </p>
        <p className="text-base font-normal leading-relaxed text-ink/82 md:text-lg">
          Now West Africa&apos;s leading healthcare technology provider,
          Helium Health facilitates hundreds of thousands of medical
          interactions monthly. As Senior Product Designer, I led design for
          Helium OS — the platform that catalyzed the company&apos;s
          expansion into the Middle East and continued growth across Nigeria
          and East Africa.
        </p>
      </SectionRow>

      <SectionRow label="Patient data protection & authorization">
        <p className="mb-6 text-base font-normal leading-relaxed text-ink/82 md:text-lg">
          Enabling interoperability across Helium&apos;s products meant
          solving a hard problem: transferring data securely across products
          and organizations while keeping patient consent at the center.
        </p>
        <div className="mb-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
          <div className="rounded-md bg-white p-6">
            <div className="mb-2 font-archivo-expanded text-[15px] font-bold text-accent">
              Health facilities
            </div>
            <p className="m-0 text-sm font-normal leading-relaxed text-ink/72 md:text-[15px]">
              House the patient data. The design had to enable smooth
              extraction and transfer while respecting privacy and
              confidentiality.
            </p>
          </div>
          <div className="rounded-md bg-white p-6">
            <div className="mb-2 font-archivo-expanded text-[15px] font-bold text-accent">
              Patients
            </div>
            <p className="m-0 text-sm font-normal leading-relaxed text-ink/72 md:text-[15px]">
              Needed the power to authorize use of their own data across
              Helium&apos;s product spectrum — a user-centric consent flow.
            </p>
          </div>
        </div>
        <FullImage
          src="/assets/helium-data.png"
          alt="Helium Health patient data authorization"
          className="rounded"
        />
      </SectionRow>

      <Section label="Managing employees of a health facility">
        <p className="mb-10 max-w-[720px] text-base font-normal leading-relaxed text-ink/82 md:text-lg">
          Healthcare professionals are also employees of an organization. We
          embedded a full HRIS system inside Helium OS — onboarding, leave,
          payroll, availability, and check-ins for doctors, nurses, and
          staff — so facilities manage people and patients in one place
          instead of juggling separate software.
        </p>
        <div className="flex flex-col gap-6">
          <FullImage
            src="/assets/helium-hris-1.png"
            alt="Helium Health HRIS — onboarding"
            className="rounded"
          />
          <FullImage
            src="/assets/helium-hris-2.png"
            alt="Helium Health HRIS — leave & payroll"
            className="rounded"
          />
          <FullImage
            src="/assets/helium-hris-3.png"
            alt="Helium Health HRIS — availability & check-ins"
            className="rounded"
          />
        </div>
      </Section>

      <SectionRow label="Ensuring patient safety" bg="muted">
        <p className="mb-8 text-base font-normal leading-relaxed text-ink/82 md:text-lg">
          To strengthen clinical decision-making, we built a system that
          proactively alerts clinicians to potential interactions between
          diagnoses, prescribed medications, and patient allergies —
          surfacing complications before they become treatment errors.
        </p>
        <FullImage
          src="/assets/helium-patient.png"
          alt="Helium Health patient safety alerts"
          className="rounded"
        />
      </SectionRow>

      <Section label="Impact" bg="ink" inverted>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          <div>
            <div className="font-archivo-expanded text-3xl font-extrabold leading-none text-canvas md:text-[38px]">
              $1M+
            </div>
            <div className="mt-2 text-[13px] font-medium leading-snug text-canvas/60">
              revenue contribution from EMR interoperability work
            </div>
          </div>
          <div>
            <div className="font-archivo-expanded text-3xl font-extrabold leading-none text-canvas md:text-[38px]">
              20%
            </div>
            <div className="mt-2 text-[13px] font-medium leading-snug text-canvas/60">
              average monthly boost to healthcare facility earnings
            </div>
          </div>
          <div>
            <div className="font-archivo-expanded text-3xl font-extrabold leading-none text-canvas md:text-[38px]">
              3M+
            </div>
            <div className="mt-2 text-[13px] font-medium leading-snug text-canvas/60">
              users served across West Africa
            </div>
          </div>
        </div>
      </Section>

      <NextCaseStudy href="/work/signature-bank" name="Signature Bank" />
      <Footer />
    </div>
  );
}
