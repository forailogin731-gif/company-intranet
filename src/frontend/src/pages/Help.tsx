import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import {
  Book,
  ChevronDown,
  HelpCircle,
  Mail,
  MessageCircle,
} from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";

const faqs = [
  {
    id: "faq-1",
    question: "How do I request time off?",
    answer:
      'Submit a time-off request through the Benefits Portal under "Time & Attendance". Your manager will receive an email notification and approve or decline within 2 business days.',
    category: "HR",
  },
  {
    id: "faq-2",
    question: "How do I update my direct deposit information?",
    answer:
      'Log in to the Benefits Portal and navigate to "Payroll → Bank Account". Changes take effect on the next payroll cycle. Contact HR if you need an immediate update.',
    category: "Finance",
  },
  {
    id: "faq-3",
    question: "How do I submit an IT support ticket?",
    answer:
      "Visit the IT Support portal linked on your dashboard, or email itsupport@acme.com. For urgent issues, call the IT helpdesk at ext. 4100. Response time is within 4 business hours.",
    category: "IT",
  },
  {
    id: "faq-4",
    question: "Where can I find company brand assets?",
    answer:
      "All brand assets including logos, color palettes, and presentation templates are available in the Brand Assets portal, accessible from your Quick Links dashboard widget.",
    category: "Marketing",
  },
  {
    id: "faq-5",
    question: "How do I enroll in a training course?",
    answer:
      'Access the Learning Hub from your dashboard Quick Links. Browse the catalog and click "Enroll" on any course. Your manager can also assign mandatory courses to your learning plan.',
    category: "HR",
  },
  {
    id: "faq-6",
    question: "How do I book business travel?",
    answer:
      "Use the Travel Booking tool in your Quick Links. All travel requires manager pre-approval for trips over $500. Submit your request at least 72 hours in advance.",
    category: "Operations",
  },
];

const contacts = [
  {
    name: "HR Team",
    email: "hr@acme.com",
    icon: MessageCircle,
    description: "People, benefits, and policy questions",
  },
  {
    name: "IT Support",
    email: "itsupport@acme.com",
    icon: HelpCircle,
    description: "Technical issues and equipment requests",
  },
  {
    name: "Finance",
    email: "finance@acme.com",
    icon: Book,
    description: "Expenses, payroll, and reimbursements",
  },
];

function FaqItem({ faq, index }: { faq: (typeof faqs)[0]; index: number }) {
  const [open, setOpen] = useState(false);
  return (
    <Card
      data-ocid={`help.faq.item.${index + 1}`}
      className="border-border shadow-subtle overflow-hidden"
    >
      <button
        type="button"
        data-ocid={`help.faq.toggle.${index + 1}`}
        onClick={() => setOpen((o) => !o)}
        className="w-full text-left"
      >
        <CardContent className="p-5">
          <div className="flex items-start justify-between gap-3">
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1">
                <Badge variant="secondary" className="text-[11px]">
                  {faq.category}
                </Badge>
              </div>
              <p className="text-sm font-semibold text-foreground">
                {faq.question}
              </p>
            </div>
            <ChevronDown
              className={cn(
                "h-4 w-4 text-muted-foreground flex-shrink-0 mt-0.5 transition-transform duration-200",
                open && "rotate-180",
              )}
            />
          </div>
          {open && (
            <p className="text-sm text-muted-foreground mt-3 leading-relaxed border-t border-border pt-3">
              {faq.answer}
            </p>
          )}
        </CardContent>
      </button>
    </Card>
  );
}

export default function Help() {
  return (
    <div className="p-6 max-w-3xl mx-auto space-y-8">
      <motion.div
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35 }}
      >
        <div className="flex items-center gap-3 mb-1">
          <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center">
            <HelpCircle className="h-5 w-5 text-primary" />
          </div>
          <h1 className="font-display text-3xl text-foreground">Help Center</h1>
        </div>
        <p className="text-muted-foreground">
          Frequently asked questions and support contacts
        </p>
      </motion.div>

      {/* FAQ */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, delay: 0.1 }}
        className="space-y-3"
      >
        <h2 className="text-base font-semibold text-foreground">
          Frequently Asked Questions
        </h2>
        {faqs.map((faq, i) => (
          <FaqItem key={faq.id} faq={faq} index={i} />
        ))}
      </motion.div>

      {/* Contacts */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, delay: 0.2 }}
        className="space-y-3"
      >
        <h2 className="text-base font-semibold text-foreground">
          Contact Teams
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {contacts.map((contact, i) => (
            <Card
              key={contact.name}
              data-ocid={`help.contact.item.${i + 1}`}
              className="border-border shadow-subtle text-center group hover:shadow-elevated transition-smooth"
            >
              <CardHeader className="pb-2">
                <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-2">
                  <contact.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-sm font-semibold text-foreground">
                  {contact.name}
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0 space-y-3">
                <p className="text-xs text-muted-foreground">
                  {contact.description}
                </p>
                <a href={`mailto:${contact.email}`}>
                  <Button
                    data-ocid={`help.contact.email_button.${i + 1}`}
                    variant="outline"
                    size="sm"
                    className="w-full gap-2 text-xs"
                  >
                    <Mail className="h-3.5 w-3.5" />
                    {contact.email}
                  </Button>
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
