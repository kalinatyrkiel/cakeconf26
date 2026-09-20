import { useCallback, useEffect, useMemo, useState } from 'react'
import type { ReactNode } from 'react'
import tweetImage from './assets/joanna-maciejewska-tweet.png'
import coIntelligenceCover from './assets/co-intelligence-book-cover.png'
import bookCover from './assets/reverse-centaur-book-cover.png'
import cakeLogo from './assets/cake-logo.svg'
import thenLoom404 from './assets/then-loom-404.png'
import thenAnalyticsEmpty from './assets/then-analytics-empty.png'
import nowAskAboutCode from './assets/now-ask-about-code.png'
import nowBloombergTakeaways from './assets/now-bloomberg-takeaways.png'
import zendeskAiPrompts from './assets/zendesk-ai-prompts.png'
import zendeskAutoAssist from './assets/zendesk-auto-assist.png'
import zendeskWhySuggestion from './assets/zendesk-why-suggestion.png'
import joshuaPorterMicrocopy from './assets/joshua-porter-microcopy.png'
import steerWithoutInterrupting from './assets/steer-without-interrupting.png'
import blankBoxAnxiety from './assets/blank-box-anxiety.png'
import notionAiFull from './assets/notion-ai-full.png'
import modeScreens from './assets/mode-screens.png'
import modeDialogue from './assets/mode-dialogue.png'
import modePrompts from './assets/mode-prompts.png'
import linkedinQr from './assets/linkedin-qr.jpg'
import thesisChatbot from './assets/thesis-chatbot.png'
import './App.css'

function CentaurIcon() {
  return (
    <svg className="mode-icon" viewBox="0 0 64 64" aria-hidden="true">
      <rect x="10" y="29" width="30" height="14" rx="7" fill="currentColor" />
      <path
        d="M38 35 45.5 19"
        fill="none"
        stroke="currentColor"
        strokeWidth="9"
        strokeLinecap="round"
      />
      <path
        d="M46 18 55 22"
        fill="none"
        stroke="currentColor"
        strokeWidth="7"
        strokeLinecap="round"
      />
      <path d="M44 15.5 43 8l6 5.5Z" fill="currentColor" />
      <path
        d="M15 43.5 14 56M23 44.5 22 56M31 44.5 32.5 56M38 43.5 40 56"
        fill="none"
        stroke="currentColor"
        strokeWidth="3.6"
        strokeLinecap="round"
      />
      <path
        d="M10.5 32C6 34 4 39 4.5 45"
        fill="none"
        stroke="currentColor"
        strokeWidth="3.6"
        strokeLinecap="round"
      />
    </svg>
  )
}

function CyborgIcon() {
  return (
    <svg className="mode-icon" viewBox="0 0 64 64" aria-hidden="true">
      <circle cx="32" cy="7" r="3" fill="currentColor" />
      <path
        d="M32 10v6"
        fill="none"
        stroke="currentColor"
        strokeWidth="3.4"
        strokeLinecap="round"
      />
      <rect
        x="14"
        y="16"
        width="36"
        height="28"
        rx="6"
        fill="none"
        stroke="currentColor"
        strokeWidth="3.4"
      />
      <circle cx="25" cy="27" r="3.2" fill="currentColor" />
      <circle cx="39" cy="27" r="3.2" fill="currentColor" />
      <path
        d="M25 36h14"
        fill="none"
        stroke="currentColor"
        strokeWidth="3.4"
        strokeLinecap="round"
      />
      <path
        d="M22 50h20M22 50v6M42 50v6"
        fill="none"
        stroke="currentColor"
        strokeWidth="3.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function UxWritersOrigin() {
  return (
    <div className="origin-layout">
      <h2 className="display statement-display origin-question">
        Where do UX writers come from?
      </h2>
      <div className="origin-blocks">
        <article>
          <span className="card-label">Tech writing</span>
          <h3>.md files are the AI standard</h3>
          <p>Markdown: the LLM’s native language</p>
        </article>
        <article className="featured-card">
          <span className="card-label">Marketing / copywriting</span>
          <h3>Human spark</h3>
          <p>Marketing knowledge and strong writing skills are still in demand</p>
        </article>
      </div>
    </div>
  )
}

function BlankBoxAnxiety({ build }: { build: number }) {
  return (
    <div className="blank-box-layout">
      <div className="blank-box-copy">
        <h2 className="slide-title wide-title">
          <span className="pink">Blank box</span> anxiety
        </h2>
        <p className="body-copy">
          {build >= 1
            ? 'Quick prompts answer: here’s what you can ask.'
            : '“What am I even allowed to ask?”'}
        </p>
      </div>
      <figure className={`blank-box-swap${build >= 1 ? ' is-cropped' : ''}`}>
        <img
          src={build >= 1 ? notionAiFull : blankBoxAnxiety}
          alt={
            build >= 1
              ? 'Notion AI with quick prompts above the Ask Notion AI input.'
              : 'Empty Ask Notion AI input box.'
          }
        />
      </figure>
    </div>
  )
}

function PromptModesExplore({
  activeId,
}: {
  activeId: 'screens' | 'dialogue' | 'prompts'
}) {
  const modes = [
    {
      id: 'screens' as const,
      label: 'Screens',
      detail: 'Buttons, labels, fixed paths',
      image: modeScreens,
      alt: 'Select model menu showing Default, GPT-5.6 Terra, and GPT-5.6 Luna options.',
    },
    {
      id: 'dialogue' as const,
      label: 'Dialogue',
      detail: 'Back-and-forth, contextual help',
      image: modeDialogue,
      alt: 'Gdańsk dialogue options: check flight times versus Warsaw, or build a 48-hour weekend itinerary.',
    },
    {
      id: 'prompts' as const,
      label: 'Prompts',
      detail: 'Intent suggested or typed in freeform',
      image: modePrompts,
      alt: 'Tatra prompt suggestions for hiking apps, packing, mountain huts, via ferrata, and avalanche safety.',
    },
  ]

  const preview = modes.find((mode) => mode.id === activeId) ?? modes[0]

  return (
    <div className="modes-explore">
      <h2 className="slide-title wide-title modes-explore-title">
        The world of <span className="green">prompt-driven UX</span>
      </h2>
      <div className="modes-explore-body">
        <div className="modes-menu">
          {modes.map((mode) => (
            <div
              key={mode.id}
              className={`modes-menu-item${activeId === mode.id ? ' is-active' : ''}`}
            >
              <span className="modes-menu-item-copy">
                <strong>{mode.label}</strong>
                <small>{mode.detail}</small>
              </span>
              {activeId === mode.id && (
                <span className="modes-check" aria-hidden="true">
                  ✓
                </span>
              )}
            </div>
          ))}
        </div>
        <div className={`modes-preview has-image modes-preview-${preview.id}`}>
          <img src={preview.image} alt={preview.alt} />
        </div>
      </div>
    </div>
  )
}

function SystemPromptMock({ showSuggestion }: { showSuggestion: boolean }) {
  return (
    <div className="prompt-mock">
      <div className="prompt-mock-copy">
        <p className="kicker">System prompt</p>
        <h2 className="prompt-mock-heading">
          Conversation design is in the <span className="green">details</span>
        </h2>
        <p className="body-copy">
          Content designers shape how AI agents respond
        </p>
      </div>
      <div className="prompt-mock-panel">
        <div className="prompt-mock-chrome">
          <span>system.md</span>
          <span>v0.3 · draft</span>
        </div>
        <pre className="prompt-mock-code">
          <code>
            <span className="prompt-line">You are a support assistant.</span>
            {'\n'}
            <span className="prompt-line">Be clear and concise.</span>
            {'\n'}
            <span
              className={`prompt-line is-hot${showSuggestion ? ' is-on' : ''}`}
            >
              {showSuggestion
                ? 'Use short paragraphs. Bullets for 3+ steps. Bold only labels or critical warnings, never whole sentences.'
                : 'Bold important words.'}
            </span>
            {'\n'}
            <span className="prompt-line">Keep answers short.</span>
          </code>
        </pre>
        <aside
          className={`prompt-suggestion${showSuggestion ? ' is-in' : ''}`}
          aria-hidden={!showSuggestion}
        >
          <span className="card-label">Content design</span>
          <p>
            <strong>Formatting is structure, not decoration.</strong> Prefer:
            “Use short paragraphs. Bullets for 3+ steps. Bold only labels or
            critical warnings, never whole sentences.”
          </p>
        </aside>
      </div>
    </div>
  )
}

function EvalsExamples() {
  const cases = [
    {
      task: 'Formatting',
      input: 'How do I reset my password?',
      fail: (
        <>
          Whole sentences in bold. Walls of text. No bullets.
        </>
      ),
      pass: (
        <>
          Paragraphs up to 3 sentences. Bullets for 3+ steps. Bold only labels
          or warnings.
        </>
      ),
    },
    {
      task: 'Tone',
      input: 'This is the third time it failed.',
      fail: '“I understand how frustrating that must feel…”',
      pass: 'Name the limit. Offer the next concrete step.',
    },
  ]

  return (
    <div className="evals-slide">
      <div className="evals-intro">
        <p className="kicker">Evals</p>
        <h2 className="slide-title wide-title">
          Test prompt changes with <strong>standardized tasks</strong>
        </h2>
      </div>
      <div className="evals-table">
        <div className="evals-table-head" aria-hidden="true">
          <span>Task</span>
          <span>User input</span>
          <span className="evals-head-status">
            <EvalFailIcon />
            Fail
          </span>
          <span className="evals-head-status">
            <EvalPassIcon />
            Pass
          </span>
        </div>
        {cases.map((item) => (
          <article key={item.task} className="evals-row">
            <div className="evals-task">
              <h3>{item.task}</h3>
            </div>
            <p className="evals-input">
              <span className="evals-quote">“{item.input}”</span>
            </p>
            <p className="evals-fail">
              <span className="evals-status-icon" role="img" aria-label="Fail">
                <EvalFailIcon />
              </span>
              <span>{item.fail}</span>
            </p>
            <p className="evals-pass">
              <span className="evals-status-icon" role="img" aria-label="Pass">
                <EvalPassIcon />
              </span>
              <span>{item.pass}</span>
            </p>
          </article>
        ))}
      </div>
    </div>
  )
}

function EvalFailIcon() {
  return (
    <svg viewBox="0 0 20 20" width="1em" height="1em" focusable="false">
      <circle cx="10" cy="10" r="9" fill="currentColor" opacity="0.2" />
      <path
        d="M6.5 6.5 13.5 13.5M13.5 6.5 6.5 13.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  )
}

function EvalPassIcon() {
  return (
    <svg viewBox="0 0 20 20" width="1em" height="1em" focusable="false">
      <circle cx="10" cy="10" r="9" fill="currentColor" opacity="0.2" />
      <path
        d="M5.5 10.5 8.5 13.5 14.5 6.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function SkillSparkIcon() {
  return (
    <svg className="skill-spark" viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M12 2.5 13.8 9.2 20.5 11 13.8 12.8 12 19.5 10.2 12.8 3.5 11 10.2 9.2Z"
        fill="currentColor"
      />
    </svg>
  )
}

function QuickPromptSkill() {
  return (
    <div className="skills-slide">
      <div className="skills-intro">
        <h2 className="slide-title wide-title">
          Claude skills that <span className="green">scale</span> the craft
        </h2>
        <p className="skills-subhead">
          Content designers write the rules – the skill scales them across the
          org.
        </p>
      </div>
      <article className="skill-card is-peek">
        <div className="skill-card-head">
          <SkillSparkIcon />
          <code>/quick-prompts</code>
        </div>
        <p>
          Generates structured quick prompts that hold to the 2–4 word rule.
        </p>
        <div className="skill-output is-in">
          <span>Create a trigger</span>
          <span>Check duplicate triggers</span>
          <span className="skill-output-check">
            <EvalPassIcon /> 2–4 words · no I, me, my
          </span>
        </div>
      </article>
    </div>
  )
}

function RecapFlipCards({ flippedCount }: { flippedCount: number }) {
  const cards = [
    {
      oldFront: 'Microcopy',
      oldBack: 'Sets expectations in fixed places',
      newFront: 'Generated copy',
      newBack: 'Controlled AI output',
    },
    {
      oldFront: 'Plain language',
      oldBack: 'Classic plain language guidelines',
      newFront: 'Plain language (still)',
      newBack: 'Embedded in system prompts',
    },
    {
      oldFront: 'Content guidelines',
      oldBack: 'Documentation for humans',
      newFront: '.md files',
      newBack: 'Human-readable, machine-parseable',
    },
  ]

  return (
    <div className="recap-flip">
      <h2 className="slide-title wide-title">
        What’s <span className="green">old</span>, what’s{' '}
        <span className="pink">new</span>
      </h2>
      <div className="recap-flip-grid">
        {cards.map((card, index) => (
          <div
            key={card.oldFront}
            className={`recap-flip-card${
              index < flippedCount ? ' is-flipped' : ''
            }`}
          >
            <div className="recap-flip-inner">
              <div className="recap-flip-face recap-flip-front">
                <span className="card-label">What’s old</span>
                <h3>{card.oldFront}</h3>
                <p>{card.oldBack}</p>
              </div>
              <div className="recap-flip-face recap-flip-back">
                <span className="card-label">What’s new</span>
                <h3>{card.newFront}</h3>
                <p>{card.newBack}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

type Slide = {
  eyebrow: string
  className?: string
  builds?: number
  content: ReactNode | ((build: number) => ReactNode)
}

const slides: Slide[] = [
  {
    eyebrow: 'CAKE conf 2026 · Talk',
    content: (
      <>
        <h1>
          Designing the AI experience:{' '}
          <span className="green">what’s old</span>,{' '}
          <span className="pink">what’s new</span>?
        </h1>
        <p className="lede">Kalina Tyrkiel-Szymańska</p>
      </>
    ),
    className: 'hero-slide',
  },
  {
    eyebrow: 'Hello',
    content: (
      <div className="intro-grid">
        <div>
          <h2>Kalina Tyrkiel-Szymańska</h2>
          <p className="role">Content Designer & UX Writing Trainer</p>
          <p className="company">Zendesk</p>
        </div>
        <div className="intro-stack">
          <div className="intro-statement is-light">
            <p>
              I design AI tools.
              <br />
              I design with AI, too.
            </p>
          </div>
          <div className="intro-statement">
            <p>
              I started in writing.
              <br />
              <strong>Now I teach how words shape AI.</strong>
            </p>
          </div>
        </div>
      </div>
    ),
    className: 'intro-slide',
  },
  {
    eyebrow: 'Microcopy',
    content: (
      <div className="microcopy-slide-layout">
        <h2 className="microcopy-heading">
          Writing microcopy <span className="green">(Joshua Porter, 2009)</span>
        </h2>
        <figure className="microcopy-frame">
          <img
            src={joshuaPorterMicrocopy}
            alt="Billing form example from Joshua Porter highlighting microcopy: Be sure to enter the billing address associated with your credit card."
          />
        </figure>
      </div>
    ),
    className: 'era-slide',
  },
  {
    eyebrow: 'Then',
    content: (
      <div className="era-layout">
        <article className="era-card">
          <span className="card-label">Then</span>
          <h2>Fixed strings in fixed places</h2>
          <p>Error states, empty states, labels: authored once, reused forever.</p>
        </article>
        <div className="era-examples">
          <figure className="example-frame example-zoom-loom">
            <img
              src={thenLoom404}
              alt="Loom 404 page: Oops, we couldn't find this Loom. It may have been deleted or archived by its creator. Back to Homepage button."
            />
          </figure>
          <figure className="example-frame example-zoom-analytics">
            <img
              src={thenAnalyticsEmpty}
              alt="Empty analytics state: Not enough plays yet. Once you get a few plays, we'll show your analytics here. Link: How to grow an audience."
            />
          </figure>
        </div>
      </div>
    ),
    className: 'era-slide',
  },
  {
    eyebrow: 'The flip',
    content: (
      <>
        <h2 className="display statement-display">
          Gen AI <span className="pink">flips the script.</span>
        </h2>
        <div className="flip-grid">
          <article>
            <span className="card-label">Then</span>
            <h3>Fixed strings in fixed places</h3>
            <p>Error states, empty states, labels: authored once, reused forever.</p>
          </article>
          <article className="featured-card">
            <span className="card-label">Now</span>
            <h3>Prompted, conversational, probabilistic</h3>
            <p>Interfaces shift toward prompting. Copy is generated in the moment.</p>
          </article>
        </div>
      </>
    ),
  },
  {
    eyebrow: 'Now',
    content: (
      <div className="era-layout">
        <article className="era-card featured-card">
          <span className="card-label">Now</span>
          <h2>Prompted, conversational, probabilistic</h2>
          <p>Interfaces shift toward prompting. Copy is generated in the moment.</p>
        </article>
        <div className="era-examples">
          <figure className="example-frame example-frame-dark example-zoom-ask">
            <img
              src={nowAskAboutCode}
              alt="AI coding assistant empty state: Ask about your code. AI responses may be inaccurate. Generate Agent Instructions to onboard AI onto your codebase."
            />
          </figure>
          <figure className="example-frame">
            <img
              src={nowBloombergTakeaways}
              alt="Bloomberg AI takeaways card summarizing that the cost of intelligence is decreasing, attributed to Summary by Bloomberg AI."
            />
          </figure>
        </div>
      </div>
    ),
    className: 'era-slide',
  },
  {
    eyebrow: 'Bio',
    content: (
      <div className="psych-bio-layout">
        <div className="psych-bio-copy">
          <h2 className="slide-title wide-title">
            I’ve been into this for a while now…
          </h2>
        </div>
        <figure className="psych-bio-frame">
          <img
            src={thesisChatbot}
            alt="Thesis record: Factors influencing satisfaction of interactions with chatbots, by Kalina Tyrkiel, Master’s in applied psychology, diploma exam 19 October 2020."
          />
        </figure>
      </div>
    ),
    className: 'psych-bio-slide',
  },
  {
    eyebrow: 'The point',
    content: (
      <h2 className="display statement-display language-quote">
        You can’t take the <span className="green">language</span>
        <br />
        out of the <span className="pink">large language model</span>
      </h2>
    ),
    className: 'statement-slide',
  },
  {
    eyebrow: 'Who’s in the room',
    content: <UxWritersOrigin />,
    className: 'origin-slide',
  },
  {
    eyebrow: 'Prompt-driven UX',
    content: <PromptModesExplore activeId="screens" />,
    className: 'modes-slide',
  },
  {
    eyebrow: 'Prompt-driven UX',
    content: <PromptModesExplore activeId="dialogue" />,
    className: 'modes-slide',
  },
  {
    eyebrow: 'Prompt-driven UX',
    content: <PromptModesExplore activeId="prompts" />,
    className: 'modes-slide',
  },
  {
    eyebrow: 'What changed for us',
    content: (
      <>
        <h2 className="display statement-display">
          How do we <span className="green">shape</span> that?
        </h2>
        <p className="body-copy">
          Through system prompts and evals.{' '}
          <strong className="pink">
            We’ve never worked so closely with engineering before!
          </strong>
        </p>
      </>
    ),
    className: 'statement-slide',
  },
  {
    eyebrow: 'System prompts',
    content: <SystemPromptMock showSuggestion={false} />,
    className: 'prompt-mock-slide',
  },
  {
    eyebrow: 'System prompts',
    content: <SystemPromptMock showSuggestion={true} />,
    className: 'prompt-mock-slide',
  },
  {
    eyebrow: 'Evals',
    content: <EvalsExamples />,
    className: 'evals-slide-wrap',
  },
  {
    eyebrow: 'Brevity',
    content: (
      <div className="brevity-slide">
        <h2 className="display statement-display">
          Content designers guard the{' '}
          <span className="green">brevity</span>
        </h2>
        <cite className="brevity-citation">
          <span className="brevity-paper-title">
            Brevity is the soul of sustainability: Characterizing LLM response
            lengths
          </span>
          <span className="brevity-authors">
            Soham Poddar, Paramita Koley, Janardan Misra, et al. (IIT Kharagpur,
            ISI Kolkata, Accenture Labs)
          </span>
        </cite>
        <p className="body-copy brevity-finding">
          “In almost all cases, LLM responses are substantially longer than the
          target response lengths, across all datasets.”
        </p>
        <p className="brevity-takeaway">
          <strong className="pink">
            Content designers fight for brevity in LLM outputs (trust me).
          </strong>
        </p>
      </div>
    ),
    className: 'statement-slide',
  },
  {
    eyebrow: 'The chaos',
    builds: 1,
    content: (build) => <BlankBoxAnxiety build={build} />,
    className: 'era-slide blank-box-slide',
  },
  {
    eyebrow: 'Example · Cursor',
    content: (
      <div className="cursor-example">
        <div className="cursor-example-copy">
          <p className="kicker">Cursor</p>
          <h2 className="cursor-heading">
            Set expectations and leave the user in control
          </h2>
          <p className="body-copy">
            Visibility of system status · User control and freedom · Match to
            the real world
          </p>
        </div>
        <figure className="example-frame cursor-frame example-frame-dark">
          <img
            src={steerWithoutInterrupting}
            alt="Cursor agent input showing placeholder microcopy: Steer without interrupting, with Auto Cost and a stop control."
          />
        </figure>
      </div>
    ),
    className: 'era-slide',
  },
  {
    eyebrow: 'Example · Zendesk',
    content: (
      <div className="zendesk-example">
        <div className="zendesk-copy">
          <p className="kicker">Zendesk</p>
          <h2>
            The power of microcopy:
            <br />
            <span className="green">AI in the message composer</span>
          </h2>
          <p className="body-copy">
            Say what the AI can do: expand, simplify, rewrite, or invite to write
            a custom prompt. Short, simple, timely.
          </p>
        </div>
        <div className="zendesk-frames zendesk-frames-single">
          <figure className="example-frame zendesk-frame">
            <img
              src={zendeskAiPrompts}
              alt="Zendesk AI writing menu with options: Expand, Simplify, Rewrite in your tone, Make more friendly, Make more formal, plus a custom prompt field."
            />
          </figure>
        </div>
      </div>
    ),
    className: 'era-slide',
  },
  {
    eyebrow: 'Example · Zendesk',
    content: (
      <div className="zendesk-example zendesk-example-shot">
        <div className="zendesk-copy">
          <p className="kicker">Zendesk</p>
          <h2>
            Auto assist
            <br />
            <span className="pink">with a plain-language why</span>
          </h2>
          <p className="body-copy">
            AI drafts the reply and shows its reasoning. Human still approves
            before it ships.
          </p>
        </div>
        <div className="zendesk-frames zendesk-frames-single">
          <figure className="example-frame zendesk-frame">
            <img
              src={zendeskAutoAssist}
              alt="Zendesk Auto assist panel drafting a reply about a dark mode feature request, with an Approve button."
            />
          </figure>
        </div>
      </div>
    ),
    className: 'era-slide',
  },
  {
    eyebrow: 'Example · Zendesk',
    content: (
      <div className="zendesk-example zendesk-example-shot">
        <div className="zendesk-copy">
          <p className="kicker">Zendesk</p>
          <h2>
            Auto assist
            <br />
            <span className="pink">with a plain-language why</span>
          </h2>
          <p className="body-copy">
            AI drafts the reply and shows its reasoning. Human still approves
            before it ships.
          </p>
        </div>
        <div className="zendesk-frames zendesk-frames-why">
          <figure className="example-frame zendesk-frame">
            <img
              src={zendeskWhySuggestion}
              alt="Zendesk panel explaining why a suggestion was generated, with sources linking to Feature Requests and Enhancements."
            />
          </figure>
        </div>
      </div>
    ),
    className: 'era-slide',
  },
  {
    eyebrow: 'Recap',
    builds: 3,
    content: (build) => <RecapFlipCards flippedCount={build} />,
    className: 'recap-slide',
  },
  {
    eyebrow: 'Psychology of AI',
    content: (
      <>
        <h2 className="display statement-display">
          The words we choose shape what people{' '}
          <span className="pink">believe</span> the AI is.
        </h2>
        <p className="body-copy">
          Let’s talk biases: and how to design around them
        </p>
      </>
    ),
    className: 'statement-slide',
  },
  {
    eyebrow: 'Anthropomorphism · 01',
    content: (
      <div className="anthro-slide">
        <h2 className="slide-title wide-title">Emotional language</h2>
        <div className="anthro-pair">
          <article className="anthro-avoid">
            <span className="anthro-label">
              <EvalFailIcon />
              Avoid
            </span>
            <div className="agent-output">
              <span className="agent-output-meta">Agent</span>
              <p>
                I’m so sorry you’re dealing with this. I completely understand
                how frustrating that must feel.
              </p>
            </div>
          </article>
          <article className="anthro-instead">
            <span className="anthro-label">
              <EvalPassIcon />
              Instead, try
            </span>
            <div className="agent-output">
              <span className="agent-output-meta">Agent</span>
              <p>
                I couldn’t find that order. Check the confirmation email, or
                search by order number.
              </p>
            </div>
          </article>
        </div>
        <cite className="research-cite">
          <span className="research-title">
            Mirages. On Anthropomorphism in Dialogue Systems
          </span>
          <span className="research-meta">
            Abercrombie, Cercas Curry, Dinkar, Rieser, Talat · EMNLP 2023
          </span>
          <span className="research-finding">
            Pseudo-empathy and emotion language push personification and
            over-reliance, especially in high-risk contexts.
          </span>
        </cite>
      </div>
    ),
  },
  {
    eyebrow: 'Anthropomorphism · 02',
    content: (
      <div className="anthro-slide">
        <h2 className="slide-title wide-title">
          <span className="green">“I”</span> / teammate framing
        </h2>
        <div className="anthro-pair">
          <article className="anthro-avoid">
            <span className="anthro-label">
              <EvalFailIcon />
              Avoid
            </span>
            <div className="agent-output">
              <span className="agent-output-meta">Agent</span>
              <p>
                I’m your AI writing teammate. I’ll take it from here and draft
                the empty state for us.
              </p>
            </div>
          </article>
          <article className="anthro-instead">
            <span className="anthro-label">
              <EvalPassIcon />
              Instead, try
            </span>
            <div className="agent-output">
              <span className="agent-output-meta">Agent</span>
              <p>
                Here’s the draft for the empty state. Review it before it ships.
              </p>
            </div>
          </article>
        </div>
        <cite className="research-cite">
          <span className="research-title">
            Believing Anthropomorphism: Cues on Trust in LLMs
          </span>
          <span className="research-meta">
            Cohn, Chang, et al. · CHI 2024 · n = 2,165
          </span>
          <span className="research-finding">
            In some contexts, first-person “I” made the same answers feel more
            accurate and less risky to rely on.
          </span>
        </cite>
      </div>
    ),
  },
  {
    eyebrow: 'Anthropomorphism · 03',
    content: (
      <div className="anthro-slide">
        <h2 className="slide-title wide-title">Confident tone</h2>
        <div className="anthro-pair">
          <article className="anthro-avoid">
            <span className="anthro-label">
              <EvalFailIcon />
              Avoid
            </span>
            <div className="agent-output">
              <span className="agent-output-meta">Agent</span>
              <p>
                Use a modal. It’s the clearest way to get confirmation.
              </p>
            </div>
          </article>
          <article className="anthro-instead">
            <span className="anthro-label">
              <EvalPassIcon />
              Instead, try
            </span>
            <div className="agent-output">
              <span className="agent-output-meta">Agent</span>
              <p>
                A modal can work for irreversible actions. Also consider an
                inline confirm if the task is frequent.
              </p>
            </div>
          </article>
        </div>
        <cite className="research-cite">
          <span className="research-title">
            Humans and Automation: Use, Misuse, Disuse, Abuse
          </span>
          <span className="research-meta">
            Parasuraman &amp; Riley · Human Factors, 1997 · automation bias
          </span>
          <span className="research-finding">
            When systems sound authoritative, people over-rely and skip their own
            verification, even when the output is wrong.
          </span>
        </cite>
      </div>
    ),
  },
  {
    eyebrow: 'The turn',
    content: (
      <h2 className="display statement-display language-quote">
        We design AI experiences…
        <br />
        but how do we <span className="green">design with AI</span>?
      </h2>
    ),
    className: 'statement-slide',
  },
  {
    eyebrow: 'AI tooling example',
    content: <QuickPromptSkill />,
    className: 'skills-slide-wrap',
  },
  {
    eyebrow: 'Wrong direction',
    content: (
      <figure className="media-frame tweet-frame">
        <img
          src={tweetImage}
          alt="Tweet by Joanna Maciejewska: the biggest problem with pushing all-things-AI is the wrong direction. She wants AI to do laundry and dishes so she can do art and writing, not the reverse."
        />
      </figure>
    ),
    className: 'media-slide',
  },
  {
    eyebrow: 'Ethan Mollick',
    content: (
      <figure className="media-frame">
        <img
          src={coIntelligenceCover}
          alt="Book cover: Co-Intelligence: Living and Working with AI by Ethan Mollick."
        />
      </figure>
    ),
    className: 'media-slide',
  },
  {
    eyebrow: 'A useful metaphor',
    content: (
      <div className="metaphor-layout">
        <div>
          <p className="kicker">Centaurs and cyborgs</p>
          <h2>
            Centaurs keep the <span className="underlined">line</span> between
            the person and the machine.
            <br />
            For cyborgs, it’s <span className="blurred">blurred</span>.
          </h2>
        </div>
        <div className="mode-cards">
          <article>
            <div className="card-head">
              <CentaurIcon />
              <span className="card-label">Centaur</span>
            </div>
            <p>AI drafts the error messages. You decide which ones ship.</p>
          </article>
          <article className="featured-card">
            <div className="card-head">
              <CyborgIcon />
              <span className="card-label">Cyborg</span>
            </div>
            <p>
              You stay in the same flow. You propose, AI challenges, you change
              it, AI challenges again. The final copy is both of yours.
            </p>
          </article>
        </div>
      </div>
    ),
  },
  {
    eyebrow: 'Cory Doctorow',
    content: (
      <figure className="media-frame">
        <img
          src={bookCover}
          alt="Book cover: The Reverse Centaur’s Guide to Life After AI by Cory Doctorow."
        />
      </figure>
    ),
    className: 'media-slide',
  },
  {
    eyebrow: 'Cory Doctorow’s warning',
    content: (
      <div className="metaphor-layout">
        <div>
          <p className="kicker">Reverse centaur</p>
          <h2>
            The machine decides.
            <br />
            <span className="pink">The human takes the blame.</span>
          </h2>
        </div>
        <div className="mode-cards">
          <article>
            <div className="card-head">
              <CentaurIcon />
              <span className="card-label">Centaur</span>
            </div>
            <p>AI drafts error messages. You decide which ones ship.</p>
          </article>
          <article className="reverse-card">
            <div className="card-head">
              <span className="reverse-icon">
                <CentaurIcon />
              </span>
              <span className="card-label">Reverse centaur</span>
            </div>
            <p>
              Someone prompts without context and ships the copy. You keep
              fixing what ships, and own the fallout.
            </p>
          </article>
        </div>
      </div>
    ),
    className: 'pink-wash',
  },
  {
    eyebrow: 'Your turn',
    content: (
      <>
        <blockquote>What is your centaur task?</blockquote>
        <p className="small-instruction">
          Asking for a new perspective? Drafting variants?
        </p>
      </>
    ),
    className: 'question-slide question-green',
  },
  {
    eyebrow: 'Your turn',
    content: (
      <>
        <blockquote>What is your reverse centaur task?</blockquote>
        <p className="small-instruction">Where does the machine decide, and you take the blame?</p>
      </>
    ),
    className: 'question-slide question-pink',
  },
  {
    eyebrow: 'Takeaways',
    content: (
      <div className="summary-slide">
        <h2 className="slide-title wide-title">Leave with this</h2>
        <div className="summary-grid">
          <article>
            <h3>Old craft, new surfaces</h3>
            <p>
              Put microcopy and plain language into conversations, prompts, and
              outputs.
            </p>
          </article>
          <article>
            <h3>Evals keep the bar high</h3>
            <p>Partner with engineering. Test the AI outputs.</p>
          </article>
          <article>
            <h3>Skills scale the craft</h3>
            <p>Encode the rules once. Stay the centaur on what ships.</p>
          </article>
        </div>
      </div>
    ),
  },
  {
    eyebrow: 'Thank you',
    content: (
      <div className="closing-layout">
        <div>
          <h2>
            There’s still work to be done.
            <br />
            <span className="pink">Enjoy the ride!</span>
          </h2>
        </div>
        <div className="closing-meta">
          <figure className="closing-qr">
            <img
              src={linkedinQr}
              alt="QR code linking to Kalina Tyrkiel-Szymańska’s LinkedIn profile"
            />
            <figcaption>Kalina on LinkedIn</figcaption>
          </figure>
        </div>
      </div>
    ),
    className: 'hero-slide',
  },
]

function App() {
  const initialSlide = useMemo(() => {
    const hash = Number(window.location.hash.replace('#', ''))
    return hash >= 1 && hash <= slides.length ? hash - 1 : 0
  }, [])
  const [current, setCurrent] = useState(initialSlide)
  const [build, setBuild] = useState(0)
  const slide = slides[current]
  const maxBuild = slide.builds ?? 0
  const content = typeof slide.content === 'function' ? slide.content(build) : slide.content

  const goTo = useCallback((index: number) => {
    const next = Math.min(Math.max(index, 0), slides.length - 1)
    setCurrent(next)
    setBuild(0)
    window.history.replaceState(null, '', `#${next + 1}`)
  }, [])

  const advance = useCallback(() => {
    if (build < maxBuild) {
      setBuild((value) => value + 1)
      return
    }
    goTo(current + 1)
  }, [build, maxBuild, current, goTo])

  const retreat = useCallback(() => {
    if (build > 0) {
      setBuild((value) => value - 1)
      return
    }
    const previous = Math.max(current - 1, 0)
    setBuild(slides[previous].builds ?? 0)
    setCurrent(previous)
    window.history.replaceState(null, '', `#${previous + 1}`)
  }, [build, current])

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const target = event.target as HTMLElement
      if (target.tagName === 'BUTTON') return
      if (['ArrowRight', 'ArrowDown', ' ', 'PageDown'].includes(event.key)) {
        event.preventDefault()
        advance()
      }
      if (['ArrowLeft', 'ArrowUp', 'PageUp'].includes(event.key)) {
        event.preventDefault()
        retreat()
      }
      if (event.key === 'Home') goTo(0)
      if (event.key === 'End') goTo(slides.length - 1)
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [advance, retreat, goTo])

  return (
    <main className="deck">
      <section
        className={`slide ${slide.className ?? ''}`}
        onClick={(event) => {
          if ((event.target as HTMLElement).closest('button, a')) return
          advance()
        }}
      >
        <div className="ambient-shape shape-one" />
        <div className="ambient-shape shape-two" />
        <header className="slide-header">
          <span className="wordmark">
            <img src={cakeLogo} alt="" className="wordmark-logo" />
            CAKE conf
          </span>
          <span>2026</span>
        </header>
        <div className="slide-content">{content}</div>
        <footer className="slide-footer">
          <span>Kalina Tyrkiel-Szymańska</span>
          <div className="slide-nav">
            <button
              type="button"
              onClick={() => retreat()}
              disabled={current === 0 && build === 0}
              aria-label="Previous slide"
            >
              ←
            </button>
            <span>
              {String(current + 1).padStart(2, '0')} /{' '}
              {String(slides.length).padStart(2, '0')}
            </span>
            <button
              type="button"
              onClick={() => advance()}
              disabled={current === slides.length - 1 && build >= maxBuild}
              aria-label="Next slide"
            >
              →
            </button>
          </div>
        </footer>
        <div className="progress-track" aria-hidden="true">
          <div
            className="progress-fill"
            style={{ width: `${((current + 1) / slides.length) * 100}%` }}
          />
        </div>
      </section>
    </main>
  )
}

export default App
