import { l as jsxRuntimeExports, d as CircleHelp, n as Button, u as reactExports, q as Badge, C as ChevronDown, a0 as cn } from "./index-6T0_xeqr.js";
import { m as motion, C as Card, b as CardHeader, c as CardTitle, a as CardContent } from "./proxy-C-7JP5f1.js";
import { M as MessageCircle, B as Book } from "./message-circle-BR0-a3TK.js";
import { M as Mail } from "./mail-BjL7nJ1j.js";
const faqs = [
  {
    id: "faq-1",
    question: "How do I request time off?",
    answer: 'Submit a time-off request through the Benefits Portal under "Time & Attendance". Your manager will receive an email notification and approve or decline within 2 business days.',
    category: "HR"
  },
  {
    id: "faq-2",
    question: "How do I update my direct deposit information?",
    answer: 'Log in to the Benefits Portal and navigate to "Payroll → Bank Account". Changes take effect on the next payroll cycle. Contact HR if you need an immediate update.',
    category: "Finance"
  },
  {
    id: "faq-3",
    question: "How do I submit an IT support ticket?",
    answer: "Visit the IT Support portal linked on your dashboard, or email itsupport@acme.com. For urgent issues, call the IT helpdesk at ext. 4100. Response time is within 4 business hours.",
    category: "IT"
  },
  {
    id: "faq-4",
    question: "Where can I find company brand assets?",
    answer: "All brand assets including logos, color palettes, and presentation templates are available in the Brand Assets portal, accessible from your Quick Links dashboard widget.",
    category: "Marketing"
  },
  {
    id: "faq-5",
    question: "How do I enroll in a training course?",
    answer: 'Access the Learning Hub from your dashboard Quick Links. Browse the catalog and click "Enroll" on any course. Your manager can also assign mandatory courses to your learning plan.',
    category: "HR"
  },
  {
    id: "faq-6",
    question: "How do I book business travel?",
    answer: "Use the Travel Booking tool in your Quick Links. All travel requires manager pre-approval for trips over $500. Submit your request at least 72 hours in advance.",
    category: "Operations"
  }
];
const contacts = [
  {
    name: "HR Team",
    email: "hr@acme.com",
    icon: MessageCircle,
    description: "People, benefits, and policy questions"
  },
  {
    name: "IT Support",
    email: "itsupport@acme.com",
    icon: CircleHelp,
    description: "Technical issues and equipment requests"
  },
  {
    name: "Finance",
    email: "finance@acme.com",
    icon: Book,
    description: "Expenses, payroll, and reimbursements"
  }
];
function FaqItem({ faq, index }) {
  const [open, setOpen] = reactExports.useState(false);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Card,
    {
      "data-ocid": `help.faq.item.${index + 1}`,
      className: "border-border shadow-subtle overflow-hidden",
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          type: "button",
          "data-ocid": `help.faq.toggle.${index + 1}`,
          onClick: () => setOpen((o) => !o),
          className: "w-full text-left",
          children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-2 mb-1", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "secondary", className: "text-[11px]", children: faq.category }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold text-foreground", children: faq.question })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                ChevronDown,
                {
                  className: cn(
                    "h-4 w-4 text-muted-foreground flex-shrink-0 mt-0.5 transition-transform duration-200",
                    open && "rotate-180"
                  )
                }
              )
            ] }),
            open && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mt-3 leading-relaxed border-t border-border pt-3", children: faq.answer })
          ] })
        }
      )
    }
  );
}
function Help() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 max-w-3xl mx-auto space-y-8", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: -12 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.35 },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CircleHelp, { className: "h-5 w-5 text-primary" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-3xl text-foreground", children: "Help Center" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "Frequently asked questions and support contacts" })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 12 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.35, delay: 0.1 },
        className: "space-y-3",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-base font-semibold text-foreground", children: "Frequently Asked Questions" }),
          faqs.map((faq, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(FaqItem, { faq, index: i }, faq.id))
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 12 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.35, delay: 0.2 },
        className: "space-y-3",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-base font-semibold text-foreground", children: "Contact Teams" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-3 gap-4", children: contacts.map((contact, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Card,
            {
              "data-ocid": `help.contact.item.${i + 1}`,
              className: "border-border shadow-subtle text-center group hover:shadow-elevated transition-smooth",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(CardHeader, { className: "pb-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(contact.icon, { className: "h-6 w-6 text-primary" }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "text-sm font-semibold text-foreground", children: contact.name })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "pt-0 space-y-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: contact.description }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: `mailto:${contact.email}`, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    Button,
                    {
                      "data-ocid": `help.contact.email_button.${i + 1}`,
                      variant: "outline",
                      size: "sm",
                      className: "w-full gap-2 text-xs",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "h-3.5 w-3.5" }),
                        contact.email
                      ]
                    }
                  ) })
                ] })
              ]
            },
            contact.name
          )) })
        ]
      }
    )
  ] });
}
export {
  Help as default
};
