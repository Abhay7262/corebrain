import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Reveal, SectionHeading } from "./reveal";

const faqs = [
  {
    q: "Is KnowledgeOS a chatbot?",
    a: "No. KnowledgeOS is an enterprise knowledge platform. It indexes your entire documentation estate, detects knowledge gaps, generates training material, and returns cited answers. Question answering is one surface of the platform, not the product itself.",
  },
  {
    q: "What kinds of documents can it handle?",
    a: "Machine manuals, SOPs, work instructions, maintenance logs, quality records, safety documentation, supplier specifications, spreadsheets, presentations, and scanned PDFs — over 40 formats, including image-based drawings via OCR.",
  },
  {
    q: "How does it avoid making things up?",
    a: "Answers are generated strictly from retrieved passages in your own documents. Every response carries the source file, revision, page number, and a confidence score. If the evidence isn't there, KnowledgeOS says so instead of guessing.",
  },
  {
    q: "Is our data used to train AI models?",
    a: "Never. Your content stays inside your isolated workspace, is encrypted in transit and at rest, and is excluded from any model training or shared retrieval index.",
  },
  {
    q: "Can we deploy it privately or on-premise?",
    a: "Yes. Enterprise customers can run KnowledgeOS in a dedicated cloud tenancy, in their own VPC, or fully on-premise with region-specific data residency.",
  },
  {
    q: "How do you handle document revisions?",
    a: "KnowledgeOS is revision-aware. It tracks versions, prioritises the current release, flags conflicting instructions across revisions, and can show what changed between them.",
  },
  {
    q: "Does it support multiple languages?",
    a: "Yes. Teams can ask in their local language and receive answers grounded in documents written in another — useful for global groups with shared engineering standards.",
  },
  {
    q: "How do permissions work?",
    a: "Access mirrors your organisation: SSO/SAML sign-in, role and group scoping, folder-level restrictions, and full audit logs of who asked what and which sources were returned.",
  },
  {
    q: "How long does implementation take?",
    a: "Most teams are live within days. Upload or connect a source, let indexing complete, and invite your users. No data science work and no changes to existing processes.",
  },
  {
    q: "Does it integrate with our existing systems?",
    a: "Yes. Connectors for SharePoint, Google Drive, Confluence, and network shares are available, plus APIs and webhooks for MES, ERP, PLM, and CMMS platforms.",
  },
];

export function Faq() {
  return (
    <section id="faq" className="section scroll-mt-20 border-t border-border bg-surface">
      <div className="container-page">
        <SectionHeading
          eyebrow="FAQ"
          title="Questions enterprise buyers ask us"
          subtitle="Security, accuracy, and deployment — answered plainly."
        />

        <Reveal delay={100} className="mx-auto mt-12 max-w-3xl">
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((f, i) => (
              <AccordionItem
                key={f.q}
                value={`item-${i}`}
                className="card-premium border-b px-5 data-[state=open]:border-primary/40"
              >
                <AccordionTrigger className="py-5 text-left text-base font-semibold hover:no-underline">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="pb-5 text-sm leading-relaxed text-muted-foreground">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
}
