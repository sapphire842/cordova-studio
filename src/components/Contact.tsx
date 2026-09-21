"use client";

import type {
  ChangeEvent,
  FormEvent,
  FormEventHandler,
  InvalidEvent,
} from "react";
import { useState } from "react";
import { useReveal } from "@/lib/utils";
import { siteUrl } from "@/lib/site";

const contactEmail = "omar@thecordovastudio.com";
const formSubmitUrl = `https://formsubmit.co/${contactEmail}`;
const requiredMessage = "Please enter your response.";
const maxTotalUploadSize = 10 * 1024 * 1024;
const fileLimitMessage = "Please upload up to five files totaling 10 MB or less.";
const maxAttachmentCount = 5;
const fieldClassName =
  "w-full border-0 border-b border-charcoal/24 bg-transparent px-0 py-3 text-base text-charcoal outline-none transition-all duration-300 placeholder:text-muted/70 hover:border-accent focus:border-studio-green focus:px-2";
const fileFieldClassName =
  "w-full cursor-pointer border-0 border-b border-charcoal/24 bg-transparent px-0 py-3 text-sm text-charcoal transition-all duration-300 file:mr-5 file:rounded-full file:border-0 file:bg-studio-green file:px-5 file:py-2.5 file:text-[0.65rem] file:uppercase file:tracking-[0.18em] file:text-warm-white file:transition-colors hover:border-accent hover:file:bg-charcoal focus:border-studio-green focus:outline-none";

function TrashIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.8"
    >
      <path d="M3 6h18" />
      <path d="M8 6V4h8v2" />
      <path d="M6 6l1 15h10l1-15" />
      <path d="M10 11v6" />
      <path d="M14 11v6" />
    </svg>
  );
}

function handleInvalid(
  event: InvalidEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
) {
  event.currentTarget.setCustomValidity(requiredMessage);
}

function clearValidation(
  event: FormEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
) {
  event.currentTarget.setCustomValidity("");
}

function formatFileSize(bytes: number) {
  return `${(bytes / 1024 / 1024).toFixed(bytes > 0 ? 1 : 0)} MB`;
}

function formatPhoneNumber(value: string) {
  const digits = value.replace(/\D/g, "").slice(0, 10);
  const parts = [
    digits.slice(0, 3),
    digits.slice(3, 6),
    digits.slice(6, 10),
  ].filter(Boolean);

  return parts.join(".");
}

export default function Contact() {
  const ref = useReveal();
  const [customerEmail, setCustomerEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [sendCopy, setSendCopy] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [visibleAttachmentFields, setVisibleAttachmentFields] = useState([1]);
  const [selectedAttachments, setSelectedAttachments] = useState<
    Record<number, { name: string; size: number }>
  >({});
  const totalUploadSize = Object.values(selectedAttachments).reduce(
    (total, file) => total + file.size,
    0
  );
  const isUploadSizeValid = totalUploadSize <= maxTotalUploadSize;

  const validateUploads = (form: HTMLFormElement) => {
    const uploadInputs = Array.from(
      form.querySelectorAll<HTMLInputElement>("[data-file-upload]")
    );
    const totalSize = uploadInputs.reduce((total, input) => {
      const file = input.files?.[0];
      return total + (file?.size ?? 0);
    }, 0);
    const isValid = totalSize <= maxTotalUploadSize;

    uploadInputs.forEach((input) => {
      input.setCustomValidity(isValid ? "" : fileLimitMessage);
    });

    return { isValid, uploadInputs };
  };

  const handleFileChange =
    (fieldNumber: number) => (event: ChangeEvent<HTMLInputElement>) => {
      const input = event.currentTarget;
      const file = input.files?.[0];

      setSelectedAttachments((current) => {
        if (!file) {
          const next = { ...current };
          delete next[fieldNumber];
          return next;
        }

        return { ...current, [fieldNumber]: { name: file.name, size: file.size } };
      });
      validateUploads(input.form as HTMLFormElement);
    };

  const clearAttachment = (fieldNumber: number) => {
    const input = document.querySelector<HTMLInputElement>(
      `[data-file-upload="${fieldNumber}"]`
    );

    if (!input) return;

    input.value = "";
    setSelectedAttachments((current) => {
      const next = { ...current };
      delete next[fieldNumber];
      return next;
    });
    setVisibleAttachmentFields((current) => {
      if (current.length === 1) return current;
      return current.filter((visibleField) => visibleField !== fieldNumber);
    });
    validateUploads(input.form as HTMLFormElement);
  };

  const addAttachmentSlot = () => {
    setVisibleAttachmentFields((current) => {
      const nextField = Array.from(
        { length: maxAttachmentCount },
        (_, index) => index + 1
      ).find((fieldNumber) => !current.includes(fieldNumber));

      return nextField ? [...current, nextField] : current;
    });
  };

  const removeEmptyAttachmentSlot = (fieldNumber: number) => {
    setVisibleAttachmentFields((current) => {
      if (current.length === 1) return current;
      return current.filter((visibleField) => visibleField !== fieldNumber);
    });
  };

  const handlePhoneChange = (event: ChangeEvent<HTMLInputElement>) => {
    event.currentTarget.setCustomValidity("");
    setPhoneNumber(formatPhoneNumber(event.currentTarget.value));
  };

  const handleSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    const form = event.currentTarget;
    const { isValid, uploadInputs } = validateUploads(form);

    if (!isValid) {
      event.preventDefault();
      uploadInputs.find((input) => input.files?.[0])?.reportValidity();
      return;
    }

    setIsSubmitting(true);
  };

  return (
    <section id="contact" className="bg-[#ebe5dc] py-24 md:py-32 lg:py-40">
      <div className="section-shell">
        <div className="grid gap-14 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
          <div ref={ref} className="fade-in">
            <p className="eyebrow text-accent">Get in Touch</p>
            <h2 className="mt-7 font-serif text-[clamp(3rem,5vw,5.2rem)] leading-[0.98] tracking-[-0.04em] text-charcoal">
              Let&apos;s shape what comes
              <span className="block italic text-studio-green/72">next.</span>
            </h2>
            <p className="mt-7 max-w-md text-base font-light leading-7 text-charcoal/68">
              Whether you&apos;re reimagining a single room or designing from
              the ground up, every project starts with a conversation.
            </p>

            <div className="mt-10 rounded-[1rem] border border-charcoal/12 bg-warm-white/55 p-6 text-sm">
              <p className="text-[0.65rem] font-medium uppercase tracking-[0.2em] text-muted">Direct contact</p>
              <a
                href={`mailto:${contactEmail}`}
                className="mt-3 block font-serif text-xl text-charcoal transition-colors hover:text-accent"
              >
                {contactEmail}
              </a>
              <div className="mt-6 flex flex-wrap gap-6">
                <a
                  href="https://www.instagram.com/thecordovastudio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium uppercase tracking-[0.16em] text-muted transition-colors hover:text-accent"
                >
                  Instagram
                </a>
                <a
                  href="https://www.linkedin.com/in/omar-cordova-garcia/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium uppercase tracking-[0.16em] text-muted transition-colors hover:text-accent"
                >
                  LinkedIn
                </a>
              </div>
              <p className="mt-6 border-t border-charcoal/10 pt-5 text-sm leading-6 text-muted">
                Walnut Creek, CA · Serving the San Francisco Bay Area
              </p>
            </div>
          </div>

          <div className="relative">
            <form
              action={formSubmitUrl}
              method="POST"
              encType="multipart/form-data"
              className="relative space-y-7 overflow-hidden rounded-[1.25rem] border border-charcoal/10 bg-warm-white p-6 shadow-[0_30px_90px_rgba(16,40,36,0.11)] md:p-10"
              onSubmit={handleSubmit}
            >
              <span className="absolute inset-x-0 top-0 h-1 bg-accent" />
              <div className="border-b border-charcoal/10 pb-5">
                <p className="text-xs font-medium uppercase tracking-[0.3em] text-accent">
                  Project Inquiry
                </p>
                <p className="mt-3 font-serif text-3xl leading-tight tracking-[-0.02em] text-charcoal">
                  Tell us what you&apos;re imagining.
                </p>
              </div>
              <input
                type="hidden"
                name="_subject"
                value="New project inquiry from The Cordova Studio website"
              />
              <input
                type="hidden"
                name="_next"
                value={`${siteUrl}/thank-you/`}
              />
              <input type="hidden" name="_template" value="table" />
              {sendCopy ? (
                <input type="hidden" name="_cc" value={customerEmail} />
              ) : null}
              <input
                type="text"
                name="_honey"
                className="hidden"
                tabIndex={-1}
              />
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-xs uppercase tracking-widest text-muted"
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    onInvalid={handleInvalid}
                    onInput={clearValidation}
                    className={fieldClassName}
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-xs uppercase tracking-widest text-muted"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    value={customerEmail}
                    onChange={(event) =>
                      setCustomerEmail(event.currentTarget.value)
                    }
                    onInvalid={handleInvalid}
                    onInput={clearValidation}
                    className={fieldClassName}
                  />
                  <label className="mt-3 flex items-center gap-3 text-sm font-light leading-relaxed text-charcoal/70">
                    <input
                      type="checkbox"
                      checked={sendCopy}
                      onChange={(event) =>
                        setSendCopy(event.currentTarget.checked)
                      }
                      className="h-4 w-4 accent-charcoal"
                    />
                    <span>Send me a copy</span>
                  </label>
                </div>
              </div>
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label
                    htmlFor="phone"
                    className="mb-2 block text-xs uppercase tracking-widest text-muted"
                  >
                    Phone
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    required
                    value={phoneNumber}
                    onChange={handlePhoneChange}
                    onInvalid={handleInvalid}
                    className={fieldClassName}
                  />
                </div>
                <div>
                  <label
                    htmlFor="project-location"
                    className="mb-2 block text-xs uppercase tracking-widest text-muted"
                  >
                    Project location
                  </label>
                  <input
                    id="project-location"
                    name="project_location"
                    type="text"
                    autoComplete="street-address"
                    required
                    onInvalid={handleInvalid}
                    onInput={clearValidation}
                    className={fieldClassName}
                  />
                </div>
              </div>
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label
                    htmlFor="service"
                    className="mb-2 block text-xs uppercase tracking-widest text-muted"
                  >
                    Service interested in
                  </label>
                  <select
                    id="service"
                    name="service_interested_in"
                    required
                    defaultValue=""
                    onInvalid={handleInvalid}
                    onInput={clearValidation}
                    className={fieldClassName}
                  >
                    <option value="" disabled>
                      Select a service
                    </option>
                    <option value="Design Consultation">Design Consultation</option>
                    <option value="Furnishing & Styling">
                      Furnishing & Styling
                    </option>
                    <option value="Space Planning">Space Planning</option>
                    <option value="Renovations">Renovations</option>
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="timeline"
                    className="mb-2 block text-xs uppercase tracking-widest text-muted"
                  >
                    Timeline
                  </label>
                  <input
                    id="timeline"
                    name="timeline"
                    type="text"
                    className={fieldClassName}
                  />
                </div>
              </div>
              <div className="max-w-[calc(50%-0.75rem)] max-md:max-w-none">
                <label
                  htmlFor="estimated-budget"
                  className="mb-2 block text-xs uppercase tracking-widest text-muted"
                >
                  Estimated budget
                </label>
                <input
                  id="estimated-budget"
                  name="estimated_budget"
                  type="text"
                  className={fieldClassName}
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-xs uppercase tracking-widest text-muted"
                >
                  Tell us about your project
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  onInvalid={handleInvalid}
                  onInput={clearValidation}
                  className={`${fieldClassName} resize-none`}
                />
              </div>
              <div className="space-y-3">
                <div>
                  <p className="mb-2 text-xs uppercase tracking-widest text-muted">
                    Upload up to five inspiration images, plans, or PDFs
                  </p>
                  <p className="text-xs font-light leading-relaxed text-charcoal/60">
                    PNG, JPG, JPEG, or PDF. Maximum 10 MB total.
                  </p>
                  <p
                    className={`mt-2 text-xs font-light leading-relaxed ${
                      isUploadSizeValid
                        ? "text-charcoal/60"
                        : "animate-pulse font-semibold text-red-700"
                    }`}
                    aria-live="polite"
                  >
                    {formatFileSize(totalUploadSize)} of{" "}
                    {formatFileSize(maxTotalUploadSize)} selected
                  </p>
                </div>
                {visibleAttachmentFields.map((fieldNumber) => (
                  <div key={fieldNumber}>
                    <div className="flex items-center gap-3">
                      <input
                        aria-label={`Attachment ${fieldNumber}`}
                        name={`attachment_${fieldNumber}`}
                        type="file"
                        accept=".png,.jpg,.jpeg,.pdf,image/png,image/jpeg,application/pdf"
                        data-file-upload={fieldNumber}
                        onChange={handleFileChange(fieldNumber)}
                        className={fileFieldClassName}
                      />
                      {fieldNumber !== 1 && !selectedAttachments[fieldNumber] ? (
                        <button
                          type="button"
                          onClick={() => removeEmptyAttachmentSlot(fieldNumber)}
                          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[6px] border border-charcoal/15 text-muted shadow-[0_10px_30px_rgba(26,26,26,0.03)] transition-all duration-300 hover:border-accent/45 hover:bg-white/70 hover:text-accent focus:border-accent focus:text-accent focus:outline-none focus:shadow-[0_0_0_4px_rgba(196,168,130,0.18)]"
                          aria-label={`Remove attachment ${fieldNumber} field`}
                        >
                          <TrashIcon />
                        </button>
                      ) : null}
                    </div>
                    {selectedAttachments[fieldNumber] ? (
                      <button
                        type="button"
                        onClick={() => clearAttachment(fieldNumber)}
                        className="mt-2 text-[10px] uppercase tracking-[0.25em] text-muted transition-colors hover:text-accent"
                      >
                        Remove {selectedAttachments[fieldNumber].name}
                      </button>
                    ) : null}
                  </div>
                ))}
                {visibleAttachmentFields.length < maxAttachmentCount ? (
                  <button
                    type="button"
                    onClick={addAttachmentSlot}
                    className="text-[10px] uppercase tracking-[0.25em] text-charcoal transition-colors hover:text-accent"
                  >
                    + Add more
                  </button>
                ) : null}
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="center-fill-button mt-4 rounded-full border border-studio-green px-9 py-4 text-xs font-medium uppercase tracking-[0.2em] text-studio-green transition-colors duration-300 hover:text-warm-white focus-visible:text-warm-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent disabled:cursor-not-allowed disabled:opacity-60"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
