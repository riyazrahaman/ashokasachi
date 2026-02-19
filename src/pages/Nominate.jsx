import WhatsappFloat from "../components/WhatsappFloat";

import {
  Award,
  Calendar,
  CheckCircle,
  ChevronRight,
  Crown,
  FileText,
  Gem,
  Heart,
  Medal,
  Sparkles,
  Star,
  Target,
  Trophy,
  Users,
} from "lucide-react";

import Button from "../components/Button";
import Card from "../components/Card";
import Carousel from "../components/Carousel";
import PageHeader from "../components/PageHeader";
import SectionHeader from "../components/SectionHeader";

import herosection from "../assets/events/herosection.png";


/* ================= STATIC DATA ================= */

const steps = [
  {
    title: "Review",
    description: "Applications are reviewed by our selection committee.",
    icon: FileText,
  },
  {
    title: "Shortlisting",
    description: "Top nominees are shortlisted for further evaluation.",
    icon: Users,
  },
  {
    title: "Final Approval",
    description: "Final approvals are completed by the advisory panel.",
    icon: Award,
  },
  {
    title: "Award Announcement",
    description: "Winners are celebrated at the annual awards event.",
    icon: Star,
  },
];

const awardGallery = [
  {
    id: "award-01",
    title: "SAACHI Leadership Award",
    caption: "Celebrating Woman who lead with vision and purpose.",
    icon: Trophy,
    color: "text-amber-500",
    bg: "bg-amber-100",
  },
  {
    id: "award-02",
    title: "Woman on the Stage",
    caption: "Honoring milestone moments from our awards ceremonies.",
    icon: Crown,
    color: "text-purple-500",
    bg: "bg-purple-100",
  },

  {
    id: "award-04",
    title: "Innovation Spotlight",
    caption: "Highlighting breakthroughs led by Woman innovators.",
    icon: Gem,
    color: "text-blue-500",
    bg: "bg-blue-100",
  },
];

const nominationTips = [
  {
    icon: Target,
    title: "Clear Impact",
    description: "Measurable outcomes or communities served",
  },
  {
    icon: Heart,
    title: "Leadership Story",
    description: "How she inspires and uplifts others",
  },
  {
    icon: Sparkles,
    title: "Vision",
    description: "Plans to scale or deepen the impact",
  },
];

/* ================= COMPONENT ================= */

function Nominate() {
  return (
    <div className="bg-mist overflow-x-hidden">

      {/* ================= HERO ================= */}
      <section className="relative isolate overflow-hidden bg-ink text-white">
        <img
          src={herosection}
          alt="Woman empowerment"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/90 via-ink/70 to-ink/30" />

        <div className="relative mx-auto max-w-6xl px-6 py-20">
          <p className="text-sm uppercase tracking-[0.4em] text-copper/80">
            SAACHI Awards 2026
          </p>

          <h1 className="mt-4 text-3xl font-semibold md:text-5xl">
            Nominate an Inspiring <br />
            <span className="text-pink-500">Woman</span> Leader
          </h1>

          <p className="mt-4 max-w-2xl text-base text-mist/90 md:text-lg">
            Recognize Woman who lead, inspire, and transform communities.
            Submit a nomination and be part of the SAACHI legacy.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Button href="#nomination-form" className="!bg-white !text-ink">
              Start Nomination
            </Button>
            <Button
              href="#process"
              variant="outline"
              className="!border-white/30 !text-white"
            >
              Learn About Process
            </Button>
          </div>
        </div>
      </section>
<br />

      {/* ================= FORM + SIDEBAR ================= */}
      <section
        id="nomination-form"
        className="mx-auto max-w-6xl px-4 pb-16"
      >
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 lg:gap-8">

          {/* ===== GOOGLE FORM EMBED ===== */}
          <Card className="lg:col-span-2 overflow-hidden border-none bg-white p-0 shadow-xl">
            <div className="border-b border-stone/20 bg-gradient-to-r from-copper/5 to-transparent p-6">
              <h2 className="text-2xl font-semibold text-ink">
                Nomination Form
              </h2>
              <p className="mt-1 text-sm text-ink/60">
                Submit your nomination using the official SAACHI Google Form.
              </p>
            </div>

            <div className="relative h-[1100px] md:h-[1200px] lg:h-[1300px]">
              <iframe
                src="https://forms.gle/1PW7nfqvsKdYuh1E8"
                title="SAACHI Nomination Form"
                className="absolute inset-0 h-full w-full border-0"
                loading="lazy"
              />
            </div>
          </Card>

          {/* ===== SIDEBAR ===== */}
          <div className="space-y-6">

            {/* Awards Gallery */}
            <Card className="border-none bg-gradient-to-br from-ink to-ink/95 p-6 shadow-xl">
              <p className="text-xs uppercase tracking-[0.2em] text-copper">
                Gallery
              </p>
              <h3 className="mt-3 text-xl font-semibold text-white">
                Awards & Recognition
              </h3>
<br />
              <Carousel
                items={awardGallery}
                renderItem={(item) => (
                  <div className="rounded-xl bg-white/10 p-4 text-center">
                    <div
                      className={`mx-auto mb-3 flex h-20 w-20 items-center justify-center rounded-2xl ${item.bg}`}
                    >
                      <item.icon size={36} className={item.color} />
                    </div>
                    <p className="text-sm font-semibold text-white">
                      {item.title}
                    </p>
                    <p className="mt-1 text-xs text-white/60">
                      {item.caption}
                    </p>
                  </div>
                )}
              />
            </Card>

            {/* Tips */}
            <Card className="bg-white p-6 shadow-xl">
              <div className="flex items-center gap-2">
                <Sparkles size={18} className="text-copper" />
                <h3 className="text-lg font-semibold text-ink">
                  Nomination Tips
                </h3>
              </div>

              <div className="mt-4 space-y-4">
                {nominationTips.map((tip, i) => (
                  <div key={i} className="flex gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-copper/10">
                      <tip.icon size={16} className="text-copper" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-ink">
                        {tip.title}
                      </p>
                      <p className="text-xs text-ink/60">
                        {tip.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

                      <Card className="text-center p-8 bg-copper/10">
            <Trophy size={48} className="mx-auto text-copper" />
            <p className="mt-4 text-xl font-semibold">
              SAACHI Awards 2026
            </p>
            <p className="text-sm text-ink/60">
              Celebrating Woman's who lead
            </p>
          </Card>

          </div>
        </div>
      </section>
<>
  <WhatsappFloat />
</>

      {/* ================= PROCESS ================= */}
      <section className="bg-white/80" id="process">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <SectionHeader
            title="Nomination & Selection Process"
            subtitle="A transparent and meaningful journey to honor Woman leaders."
          />

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, i) => (
              <Card key={i} className="p-6 shadow-soft">
                <step.icon className="text-copper" />
                <h3 className="mt-3 font-semibold text-ink">
                  {step.title}
                </h3>
                <p className="mt-1 text-sm text-ink/60">
                  {step.description}
                </p>
              </Card>
            ))}
          </div>


        </div>
      </section>

    </div>
  );
}

export default Nominate;
