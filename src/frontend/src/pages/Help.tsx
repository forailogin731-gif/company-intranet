import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import {
  AlertTriangle,
  BookOpen,
  ChevronDown,
  HardHat,
  HelpCircle,
  Mail,
  Monitor,
  Phone,
  Send,
  ShieldCheck,
  Users,
} from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";

const faqs = [
  {
    id: "faq-1",
    question: "How do I apply for leave?",
    answer:
      "Submit a leave application through HR by filling in the request form and notifying your department supervisor at least 3 days in advance (except emergencies). Approved leaves will be reflected in your attendance record.",
    category: "HR",
  },
  {
    id: "faq-2",
    question: "What is the procedure for overtime approval?",
    answer:
      "Overtime requests must be approved by your department head and submitted to PPC by EOD Friday for the following week. Overtime hours are compensated at 1.5× as per Factories Act provisions.",
    category: "HR",
  },
  {
    id: "faq-3",
    question: "How do I report an equipment breakdown?",
    answer:
      "Call the Maintenance helpline at Ext. 2100 immediately. Log a breakdown work order in the ERP under Maintenance → Breakdown WO. Ensure the machine is tagged 'Out of Service' and operator safety is not compromised.",
    category: "Maintenance",
  },
  {
    id: "faq-4",
    question: "How do I raise an IT support ticket?",
    answer:
      "Email itsupport@nexusmfg.in or call Ext. 3100. For critical ERP/MES issues, call Vikram Pillai directly at +91 98400 11009. Tickets are resolved within 4 business hours for critical issues.",
    category: "IT",
  },
  {
    id: "faq-5",
    question: "What is the PPE requirement on the press shop floor?",
    answer:
      "Mandatory PPE: Safety shoes (IS 15298), safety glasses, ear plugs (>85 dB areas), and hand gloves for material handling. Full-body coverage clothing is required at all times. PPE is issued free from Stores on written request.",
    category: "Safety",
  },
  {
    id: "faq-6",
    question: "How do I raise a material requisition?",
    answer:
      "Log in to ERP → Stores → Material Request. Fill in the part number, quantity, and purpose. Requests are reviewed by Stores and Purchase within 24 hours. Urgent requests must be flagged and cc'd to your department head.",
    category: "Stores",
  },
  {
    id: "faq-7",
    question: "How do I request a quality inspection?",
    answer:
      "Submit an inspection request in ERP under Quality → Inspection Request. For incoming RM inspection, attach the material test certificate. In-process and final inspection are scheduled per the control plan frequency.",
    category: "Quality",
  },
  {
    id: "faq-8",
    question: "How are salary slips accessed?",
    answer:
      "Salary slips are uploaded to the HR portal by the 5th of each month. Log in with your employee ID and navigate to Payroll → Salary Slips. Contact Finance for any discrepancies.",
    category: "HR",
  },
];

const safetyGuidelines = [
  {
    icon: HardHat,
    title: "PPE Compliance",
    text: "Safety shoes, glasses, and ear protection are mandatory on the press floor at all times.",
  },
  {
    icon: AlertTriangle,
    title: "Emergency Stop",
    text: "All press operators must know the location of the nearest E-stop and fire extinguisher.",
  },
  {
    icon: ShieldCheck,
    title: "LOTO Procedure",
    text: "Lock-out/Tag-out must be followed before any die change, maintenance, or cleaning operation.",
  },
  {
    icon: AlertTriangle,
    title: "Near Miss Reporting",
    text: "All near misses must be reported to the Safety Officer within 2 hours via the ERP Safety module.",
  },
];

const deptContacts = [
  {
    dept: "IT Support",
    lead: "Vikram Pillai",
    email: "itsupport@nexusmfg.in",
    ext: "3100",
    icon: Monitor,
    color: "text-primary",
  },
  {
    dept: "HR",
    lead: "Deepa Nair",
    email: "hr@nexusmfg.in",
    ext: "3200",
    icon: Users,
    color: "text-chart-5",
  },
  {
    dept: "Maintenance",
    lead: "Mohan Krishnan",
    email: "maintenance@nexusmfg.in",
    ext: "2100",
    icon: HelpCircle,
    color: "text-destructive",
  },
  {
    dept: "Quality",
    lead: "Kavitha Subramanian",
    email: "quality@nexusmfg.in",
    ext: "2200",
    icon: ShieldCheck,
    color: "text-chart-5",
  },
  {
    dept: "Finance",
    lead: "Anita Sharma",
    email: "finance@nexusmfg.in",
    ext: "3300",
    icon: BookOpen,
    color: "text-chart-1",
  },
  {
    dept: "Stores",
    lead: "Ganesh Babu",
    email: "stores@nexusmfg.in",
    ext: "4100",
    icon: HelpCircle,
    color: "text-chart-4",
  },
];

function FaqItem({ faq, index }: { faq: (typeof faqs)[0]; index: number }) {
  const [open, setOpen] = useState(false);
  const catColors: Record<string, string> = {
    HR: "bg-chart-5/15 text-chart-5 border-chart-5/25",
    IT: "bg-primary/15 text-primary border-primary/25",
    Maintenance: "bg-destructive/15 text-destructive border-destructive/25",
    Safety: "bg-destructive/15 text-destructive border-destructive/25",
    Stores: "bg-chart-4/15 text-chart-4 border-chart-4/25",
    Quality: "bg-chart-5/15 text-chart-5 border-chart-5/25",
  };
  return (
    <Card
      data-ocid={`help.faq.item.${index + 1}`}
      className="border-border shadow-subtle overflow-hidden transition-smooth hover:border-primary/20"
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
              <Badge
                className={`text-[11px] mb-2 border ${catColors[faq.category] ?? "bg-muted text-muted-foreground border-border"}`}
              >
                {faq.category}
              </Badge>
              <p className="text-sm font-semibold text-foreground leading-snug">
                {faq.question}
              </p>
            </div>
            <ChevronDown
              className={cn(
                "h-4 w-4 text-muted-foreground flex-shrink-0 mt-0.5 transition-transform duration-250",
                open && "rotate-180 text-primary",
              )}
            />
          </div>
          {open && (
            <p className="text-sm text-muted-foreground mt-3.5 leading-relaxed border-t border-border pt-3.5">
              {faq.answer}
            </p>
          )}
        </CardContent>
      </button>
    </Card>
  );
}

function ITTicketForm() {
  const [submitted, setSubmitted] = useState(false);
  return submitted ? (
    <div
      data-ocid="help.it_ticket.success_state"
      className="text-center py-8 text-accent"
    >
      <div className="h-14 w-14 rounded-2xl bg-accent/10 flex items-center justify-center mx-auto mb-3">
        <ShieldCheck className="h-7 w-7" />
      </div>
      <p className="font-semibold text-foreground">Ticket Submitted!</p>
      <p className="text-sm text-muted-foreground mt-1">
        IT team will respond within 4 business hours.
      </p>
      <Button
        variant="outline"
        size="sm"
        className="mt-4"
        onClick={() => setSubmitted(false)}
      >
        Submit Another
      </Button>
    </div>
  ) : (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
      }}
      className="space-y-4"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <Label
            htmlFor="it-name"
            className="text-xs font-medium text-muted-foreground uppercase tracking-wide"
          >
            Your Name
          </Label>
          <Input
            id="it-name"
            data-ocid="help.it_ticket.name_input"
            placeholder="e.g. Rajesh Kumar"
            className="bg-card border-border"
            required
          />
        </div>
        <div className="space-y-1.5">
          <Label
            htmlFor="it-dept"
            className="text-xs font-medium text-muted-foreground uppercase tracking-wide"
          >
            Department
          </Label>
          <Select required>
            <SelectTrigger
              id="it-dept"
              data-ocid="help.it_ticket.dept_select"
              className="bg-card border-border"
            >
              <SelectValue placeholder="Select department" />
            </SelectTrigger>
            <SelectContent>
              {[
                "Production",
                "Quality",
                "Maintenance",
                "Tool-Room",
                "Stores",
                "PPC",
                "NPD",
                "HR",
                "Finance",
                "Accounts",
                "Purchase",
                "RM-Purchase",
                "IT",
              ].map((d) => (
                <SelectItem key={d} value={d}>
                  {d}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="space-y-1.5">
        <Label
          htmlFor="it-priority"
          className="text-xs font-medium text-muted-foreground uppercase tracking-wide"
        >
          Priority
        </Label>
        <Select required>
          <SelectTrigger
            id="it-priority"
            data-ocid="help.it_ticket.priority_select"
            className="bg-card border-border"
          >
            <SelectValue placeholder="Select priority" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="critical">Critical — ERP/MES Down</SelectItem>
            <SelectItem value="high">High — Machine / Network Issue</SelectItem>
            <SelectItem value="medium">Medium — Software / Access</SelectItem>
            <SelectItem value="low">Low — General Query</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="space-y-1.5">
        <Label
          htmlFor="it-issue"
          className="text-xs font-medium text-muted-foreground uppercase tracking-wide"
        >
          Issue Description
        </Label>
        <Textarea
          id="it-issue"
          data-ocid="help.it_ticket.issue_textarea"
          placeholder="Describe your IT issue in detail — include machine/system name, error messages, and when it started..."
          rows={4}
          className="bg-card border-border resize-none"
          required
        />
      </div>
      <Button
        type="submit"
        data-ocid="help.it_ticket.submit_button"
        className="gap-2 w-full sm:w-auto"
      >
        <Send className="h-4 w-4" /> Submit Ticket
      </Button>
    </form>
  );
}

export default function Help() {
  return (
    <div className="p-6 max-w-4xl mx-auto space-y-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35 }}
      >
        <div className="flex items-center gap-2.5 mb-1">
          <div className="h-9 w-9 rounded-xl bg-primary/10 flex items-center justify-center">
            <HelpCircle className="h-5 w-5 text-primary" />
          </div>
          <h1 className="font-display text-3xl text-foreground">Help Center</h1>
        </div>
        <p className="text-muted-foreground text-sm">
          FAQs, IT support, safety guidelines, and department contacts — Nexus
          MFG, Hosur
        </p>
      </motion.div>

      {/* IT Support Ticket */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, delay: 0.08 }}
      >
        <Card
          className="shadow-card border-border"
          data-ocid="help.it_ticket.panel"
        >
          <CardHeader className="pb-4 border-b border-border">
            <CardTitle className="text-base font-semibold text-foreground flex items-center gap-2">
              <div className="h-8 w-8 rounded-xl bg-primary/10 flex items-center justify-center">
                <Monitor className="h-4 w-4 text-primary" />
              </div>
              Raise IT Support Ticket
            </CardTitle>
            <p className="text-xs text-muted-foreground mt-0.5">
              For ERP, network, hardware, or software issues — target
              resolution: 4 hrs
            </p>
          </CardHeader>
          <CardContent className="pt-5">
            <ITTicketForm />
          </CardContent>
        </Card>
      </motion.div>

      {/* Safety Guidelines */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, delay: 0.12 }}
        className="space-y-3"
        data-ocid="help.safety.section"
      >
        <div className="flex items-center gap-2 mb-3">
          <HardHat className="h-5 w-5 text-destructive" />
          <h2 className="text-base font-semibold text-foreground">
            Safety Guidelines
          </h2>
          <Badge className="text-[11px] bg-destructive/15 text-destructive border border-destructive/25">
            Mandatory
          </Badge>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {safetyGuidelines.map((s, i) => (
            <Card
              key={s.title}
              data-ocid={`help.safety.item.${i + 1}`}
              className="border-border shadow-subtle"
            >
              <CardContent className="p-4 flex gap-3 items-start">
                <div className="h-9 w-9 rounded-xl bg-destructive/10 flex items-center justify-center flex-shrink-0">
                  <s.icon className="h-4 w-4 text-destructive" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">
                    {s.title}
                  </p>
                  <p className="text-xs text-muted-foreground mt-0.5 leading-relaxed">
                    {s.text}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </motion.div>

      {/* HR FAQ */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, delay: 0.16 }}
        className="space-y-3"
        data-ocid="help.faq.section"
      >
        <h2 className="text-base font-semibold text-foreground flex items-center gap-2">
          <BookOpen className="h-5 w-5 text-primary" />
          Frequently Asked Questions
        </h2>
        {faqs.map((faq, i) => (
          <FaqItem key={faq.id} faq={faq} index={i} />
        ))}
      </motion.div>

      {/* Department Contacts */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, delay: 0.2 }}
        className="space-y-3"
        data-ocid="help.contacts.section"
      >
        <h2 className="text-base font-semibold text-foreground flex items-center gap-2">
          <Phone className="h-5 w-5 text-primary" />
          Department Contacts
        </h2>
        <Card className="border-border shadow-card overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-muted/50 border-b border-border">
                  <th className="text-left px-4 py-3 text-xs font-semibold text-muted-foreground uppercase tracking-wide">
                    Department
                  </th>
                  <th className="text-left px-4 py-3 text-xs font-semibold text-muted-foreground uppercase tracking-wide">
                    Contact Lead
                  </th>
                  <th className="text-left px-4 py-3 text-xs font-semibold text-muted-foreground uppercase tracking-wide">
                    Email
                  </th>
                  <th className="text-left px-4 py-3 text-xs font-semibold text-muted-foreground uppercase tracking-wide">
                    Ext.
                  </th>
                </tr>
              </thead>
              <tbody>
                {deptContacts.map((c, i) => (
                  <tr
                    key={c.dept}
                    data-ocid={`help.contact.item.${i + 1}`}
                    className="border-b border-border last:border-0 hover:bg-muted/30 transition-colors"
                  >
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-2.5">
                        <div className="h-7 w-7 rounded-lg bg-muted flex items-center justify-center flex-shrink-0">
                          <c.icon className={`h-3.5 w-3.5 ${c.color}`} />
                        </div>
                        <span className="font-medium text-foreground">
                          {c.dept}
                        </span>
                      </div>
                    </td>
                    <td className="px-4 py-3 text-muted-foreground">
                      {c.lead}
                    </td>
                    <td className="px-4 py-3">
                      <a
                        href={`mailto:${c.email}`}
                        data-ocid={`help.contact.email_button.${i + 1}`}
                        className="text-primary hover:underline flex items-center gap-1.5"
                      >
                        <Mail className="h-3.5 w-3.5 flex-shrink-0" />
                        {c.email}
                      </a>
                    </td>
                    <td className="px-4 py-3">
                      <Badge variant="secondary" className="text-xs font-mono">
                        Ext. {c.ext}
                      </Badge>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      </motion.div>
    </div>
  );
}
