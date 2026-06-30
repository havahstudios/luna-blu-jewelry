'use client';

import { useState } from 'react';
import { Check } from 'lucide-react';
import Announcement from '@/components/Announcement';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Toast from '@/components/Toast';

const INPUT = 'w-full border-[1.5px] border-sand-400 rounded-sm px-[14px] py-3 font-sans text-[16px] text-ink-700 bg-white outline-none focus:border-ink-900 transition-colors placeholder:text-ink-300';
const LABEL = 'block text-[12px] uppercase tracking-[0.12em] font-semibold text-ink-500 mb-2';

export default function ContactPage() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSent(true);
  }

  function set(key: string) {
    return (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm(f => ({ ...f, [key]: e.target.value }));
  }

  return (
    <div className="flex flex-col min-h-screen font-sans bg-white">
      <Announcement />
      <Header />
      <Toast />

      <main className="flex-1">
        <div className="lb-screen max-w-[640px] mx-auto px-12 py-16 pb-24">
          {/* Heading */}
          <div className="text-center mb-11">
            <h1 className="font-display font-medium text-[54px] text-ink-900 m-0 mb-[14px]">Contact</h1>
            <p className="text-[15px] text-ink-500 leading-[1.6]">
              Complete the form below or email us at{' '}
              <a href="mailto:lunablujewels@gmail.com" className="text-taupe-600 hover:text-gold-700 transition-colors">
                lunablujewels@gmail.com
              </a>{' '}
              and we&apos;ll assist you as soon as possible.
            </p>
          </div>

          {sent ? (
            <div className="text-center py-12 px-6 border border-sand-300 rounded-lg bg-ivory-50">
              <div className="w-14 h-14 rounded-full bg-gold-500 flex items-center justify-center mx-auto mb-[18px]">
                <Check size={24} className="text-ink-900" />
              </div>
              <h3 className="font-display font-medium text-[28px] text-ink-900 m-0 mb-2">Message sent</h3>
              <p className="text-[14px] text-ink-500 m-0">Thank you — we&apos;ll be in touch shortly.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <div>
                <label className={LABEL}>Name</label>
                <input required value={form.name} onChange={set('name')} placeholder="Your name" className={INPUT} />
              </div>
              <div>
                <label className={LABEL}>Email</label>
                <input required type="email" value={form.email} onChange={set('email')} placeholder="you@example.com" className={INPUT} />
              </div>
              <div>
                <label className={LABEL}>Subject</label>
                <input required value={form.subject} onChange={set('subject')} placeholder="How can we help?" className={INPUT} />
              </div>
              <div>
                <label className={LABEL}>Message</label>
                <textarea
                  required
                  rows={5}
                  value={form.message}
                  onChange={set('message')}
                  placeholder="Tell us more…"
                  className={`${INPUT} resize-y`}
                />
              </div>
              <button
                type="submit"
                className="w-full h-14 bg-ink-900 text-ivory-50 text-[13px] font-semibold tracking-[0.12em] uppercase rounded-sm hover:bg-ink-800 active:bg-ink-700 transition-colors"
              >
                Send message
              </button>
            </form>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
